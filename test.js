// Demo ways to import data

'use strict';

// // Import all model apis from server.js
// const getModel = require('./server/server.js').models;

// // Create new profile data
// getModel.Profile.create({name: 'Adey'}, (err, profile) => {
//   console.log('data', err, profile);
// });

// // Update existing profile
// getModel.Profile.upsert({ name: "Admin" }, (err, profile) => {
//   console.log("data", err, profile);
// });

let num = [2, 3, 4, 5];
let num2 = [...num, 7];
console.log(num2);
