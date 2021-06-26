const { Sequelize } = require('sequelize');
require('dotenv').config();

// Option 2: Passing parameters separately (other dialects)
module.exports = db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect:process.env.DB_TYPE,
  port: process.env.DB_PORT
});