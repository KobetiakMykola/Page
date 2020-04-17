'use strict';

/**
 * SQL connection
 */

/**
 * Dependencies
 */
import {Sequelize} from 'sequelize-typescript';
import * as config from "../configs/config.mysql";
import mysql from "mysql"
import util from 'util'

/**
 * Exports
 */
export const sequelize = new Sequelize({
    database: config.database,
    host: config.host,
    username: config.username,
    password: config.password,
    storage: ':memory:',
    logging: false,
    dialect: 'mysql',
    models: [__dirname + '/models']
});

export function initModels(): void {
    sequelize.sync()
}

export const pool = mysql.createPool({
    database: config.database,
    host: config.host,
    user: config.username,
    password: config.password,
})
// @ts-ignore
pool.query = util.promisify(pool.query)

