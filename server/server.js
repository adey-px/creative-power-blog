// Copyright IBM Corp. 2016,2019. All Rights Reserved
// Node module: loopback-workspace
// This file is licensed under the MIT License
// License text available at https://opensource.org/licenses/MIT

'use strict';

const loopback = require('loopback');
const boot = require('loopback-boot');

const app = (module.exports = loopback());

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    const baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware
// Sub-apps like REST API are mounted via boot scripts
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});

/* ---------------- Developer code starts here ---------------------- */
// To check all models accessible in model-config.json
// console.log(Object.keys(app.models));

// For test in explorer, create user and their profile
app.models.Blogger.afterRemote('create', (err, newUser, next) => {
  console.log('New user is created', newUser);
  app.models.Profile.create(
    {
      firstName: newUser.username,
      createdAt: new Date(),
      userId: newUser.id,
    },
    (erros, newProfile) => {
      if (!erros && newProfile) {
        console.log('New profile is created', newProfile);
      } else {
        console.log('Failed to create user profile', erros);
      }
      next();
    }
  );
});

// Config for custom access token to login
app.middleware('auth', loopback.token({
  model: app.models.AuthToken,
}));

// At build, find user, auto create one if none
app.models.Blogger.find((err, ppl) => {
  if (ppl.length === 0) {
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

// Role based mapping
// At build, find admin in role, auto create one if none
app.models.Role.find({where: {name: 'admin'}}, (err, sub) => {
  if (!err && sub) {
    console.log('No Error!! Role found is...', sub);
    if (sub.length === 0) {
      app.models.Role.create(
        {
          name: 'admin',
        },
        (error, newAdmin) => {
          if (!error && newAdmin) {
            app.models.Blogger.findOne((erros, pers) => {
              if (!erros && pers) {
                newAdmin.principals.create(
                  {
                    principalType: app.models.RoleMapping.USER,
                    principalId: pers.id,
                  },
                  (erroz, biggie) => {
                    console.log('New Admin is created', erroz, biggie);
                  }
                );
              }
            });
          }
        }
      );
    }
  }
});

/*
  Next create custom ACL to apply access control to BlogPost model
  ACL to deny everyone, another ACL to allow admin only...etc
*/

// Find editor in role, auto create one if none
app.models.Role.find({where: {name: 'editor'}}, (err, sub) => {
  if (!err && sub) {
    if (sub.length === 0) {
      app.models.Role.create({
        name: 'editor',
      }, (erro, subs) => {
        console.log(erro, subs);
      });
    }
  }
});

/*
  Next create Category model, link relations in BlogPost
  to Category model. Also configure ACL for both models
*/
