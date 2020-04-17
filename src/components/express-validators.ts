"use strict";

/**
 * Express validators
 */

/**
 * Dependencies
 */
import {check} from "express-validator";
import {pool} from "../dataBase/models";
import {validator} from './middleware'

/**
 * Express validators for signup form fields
 */
export const signupValidator = [
    check('email', 'Field email wrong type.').trim().exists().isEmail(),
    check('email').custom(async (email) => {
        const [user]: any = await pool.query(`select email from users where email = '${email}'`);
        if (user) throw new Error('User with email already exists');
    }),
    check('password', 'Field password is required and min length is 6.').exists().isString().isLength({min: 6}).escape(),
    check('password', 'Field password must be same as confirm password field')
        .custom((value, {req}) => {
            return value === req.body.confirmPassword;
        }),
    validator
];

/**
 * Express validators for create schedule
 */
export const createSchedule = [
    check('date', 'Field date is required.').trim().exists().isLength({min: 1}).escape(),
    check('time', 'Field time is required.').trim().exists().isLength({min: 1}).escape(),
    check('type', 'Field type is required.').trim().exists().isLength({min: 1}).escape(),
    check('description', 'Field description is required.').trim().exists().isLength({min: 1}).escape(),
    validator
];