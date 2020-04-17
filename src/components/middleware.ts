"use strict";

/**
 * Project middleware
 */

/**
 * Dependencies
 */
import {validationResult} from 'express-validator';
import createError from 'http-errors';
import {sendError} from "./response";
import jwt from "jsonwebtoken";
import {config} from "../configs/config";
import {pool} from "../dataBase/models";

/**
 * Attaches current user to request
 * @param {object} req
 * @param {object} res
 * @param {function} next - callback
 */
export async function attachUserToRequest(req: any, res: Response, next: any): Promise<void> {
    try {
        const returns = 'id, email, role';

        const [user]: any = await pool.query(`select ${returns} from users where id = ${pool.escape(req.query.userId)}`);
        if (user) {
            req.user = user;
            next()
        }
    } catch (e) {
        next(e)
    }
}

/**
 * Decrypt token, return result
 * @param {object} req
 * @param {object} res
 * @param {function} next - callback
 */
export function checkAuthorization(req: any, res: any, next: any): void {
    const token: string = req.header('Authorization');
    jwt.verify(token, config.jwt.secret, (err: any) => {
        if (err) {
            return next(sendError(createError(401, 'Unauthorized'), res))
        } else {
            return next()
        }
    });
}

/**
 * Express validator handler
 * @param {object} req
 * @param {object} res
 * @param {function} next - callback
 */
export function validator(req: any, res: any, next: any) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) sendError(createError(422, errors), res)
    next();
}

/**
 * Checks if current user has required role
 * @param {string[]} roles - allowed roles
 * @returns {function}
 */
export function checkUserRole(roles: [string]) {
    return function (req: any, res: any, next: any) {
        const role = req.user.role;

        if (roles.includes(role)) return next();
        else return sendError(createError(403, "User not authorized to perform this action"), res)
    };
}