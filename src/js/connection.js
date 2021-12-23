"use strict";
const { Sequelize } = require('sequelize');
require('dotenv').config();

module.exports = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        dialect: process.env.DIALECT,
        logging: false
    }
);