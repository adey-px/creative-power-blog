// Copyright IBM Corp. 2016,2019. All Rights Reserved.
// Node module: loopback-workspace
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

"use strict";

const loopback = require("loopback");
const boot = require("loopback-boot");

const app = (module.exports = loopback());

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit("started");
    const baseUrl = app.get("url").replace(/\/$/, "");
    console.log("Web server listening at: %s", baseUrl);
    if (app.get("loopback-component-explorer")) {
      const explorerPath = app.get("loopback-component-explorer").mountPath;
      console.log("Browse your REST API at %s%s", baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module) app.start();
});

/* ---- Developer code starts here ---- */
// Check all models accessible in model-config.json
console.log(Object.keys(app.models));

// At build, try find user, auto create one if none
app.models.Blogger.find((err, bloggers) => {
  if (bloggers.length === 0) {
    const newUser = {
      email: 'test@gmail.com',
      password: 'password',
      username: 'adey',
    };
    app.models.Blogger.create(newUser, (err, newUser) => {
      console.log('New user is created', err, newUser);
    });
  }
});

// In explorer, manually create user and their profile
app.models.Blogger.afterRemote("create", (xyz, newUser, next) => {
  console.log("New user is created", newUser);
  app.models.Profile.create(
    {
      firstName: newUser.username,
      createdAt: new Date(),
      userId: newUser.id,
    },
    (err, newProfile) => {
      if (!err && newProfile) {
        console.log("New profile is created", newProfile);
      } else {
        console.log("Failed to create user profile", err);
      }
      next();
    }
  );
});

// //
// app.middleware('auth', loopback.token({
//   model: app.models.AuthToken,
// }));
