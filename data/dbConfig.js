// Configuration


// (1) - Import Knex.JS
const knex = require('knex');
// (2) - Import Config Object from Knexfile.js
const config = require('../knexfile.js');
// (3) - Export the config object for its respective 
//     - ...environment
// [ex] development : config.development
module.exports = knex(config.development);
