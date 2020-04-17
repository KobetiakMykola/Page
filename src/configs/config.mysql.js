"use strict";

/**
 * Dependencies
 */
const dotenv = require('dotenv');
dotenv.config();

/**
 * Exports
 */
module.exports = {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": "3306",
    "dialect": "mysql",
    "operatorsAliases": false,
    "logging": false,
};
