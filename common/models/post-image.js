/* eslint-disable max-len */
/* eslint-disable quotes */
"use strict";

//
const sharp = require("sharp");
const fileSys = require("fs");
const containerURL = "/api/containers/";

// Logic for image file upload
module.exports = function(PostImage) {
  PostImage.upload = function(ctx, options, postId, userId, callBk) {
    if (!options) options = {};

    ctx.req.params.container = "postImages";
    if (!fileSys.existsSync("./server/storage" + ctx.req.params.container)) {
      fileSys.mkdirSync("./server/storage/" + ctx.req.params.container);
    }
    //
    PostImage.app.models.ImageFile.upload(
      ctx.req,
      ctx.result,
      options,
      (err, file) => {
        if (err) {
          callBk(err);
        } else {
          var fileInfo = file.files.file[0];

          sharp("./server/storage/" + ctx.req.params.container + "/" + fileInfo.name)
            .resize(100)
            .toFile(
              "./server/storage/" +
                ctx.req.params.container +
                "/100-" +
                fileInfo.name,
              (err) => {
                if (!err) {
                  PostImage.create(
                    {
                      url: containerURL + fileInfo + "/download" + fileInfo.name,
                      thumbnail: containerURL + fileInfo + "/download" + fileInfo.name,
                      createdAt: new Date(),
                      postId: postId,
                      userId: userId,
                    },
                    (erro, image) => {
                      if (erro) {
                        callBk(erro);
                      } else {
                        callBk(null, image);
                      }
                    }
                  );
                }
              }
            );
        }
      }
    );
  };

  PostImage.remoteMethod("upload", {
    desription: "upload a file",
    accepts: [
      {arg: "ctx", type: "object", http: {source: "context"}},
      {arg: "option", type: "object", http: {source: "query"}},
      {arg: "accessToken", type: "string"},
      {arg: "postId", type: "string"},
      {arg: "userId", type: "string"},
    ],
    returns: {arg: "fileObject", type: "object", root: true},
    http: {verb: "post"},
  });
};
