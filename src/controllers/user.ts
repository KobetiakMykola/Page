'use strict'

/**
 * Users controller
 */

/**
 * Dependencies
 */
import passport from 'passport'
import {sendResponse, sendError} from "../components/response";
import jwt from "jsonwebtoken";
import {config} from "../configs/config";
import createError from 'http-errors'

/**
 * Validates user's credentials and sends JWT token
 * @param {object} req
 * @param {object} res
 */
export function signin(req: Request, res: Response) {
    passport.authenticate("local", (err, user, info) => {
        const error = err || info;
        if (error) return sendError(createError(422, error), res);

        const token: string = jwt.sign(user, config.jwt.secret);

        return sendResponse(200, res)(null, {token: token, userId: user.id});

    })(req, res);
}

/**
 * Validates user's credentials and sends JWT token
 * @param {object} req
 * @param {object} res
 */
export async function signup(req: Request, res: Response) {
    try {
        const userData = req.body;
        console.log(userData);
    }catch (err) {
        sendError(err, res);
    }
}