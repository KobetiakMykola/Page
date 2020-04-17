"use strict";

/**
 * Routes for API v.1
 */

/**
 * Dependencies
 */
import {sendError} from '../components/response';
import {checkAuthorization, checkUserRole} from '../components/middleware'
import createError from 'http-errors';
import * as MW from '../components/middleware';
import * as validators from '../components/express-validators'
import express from 'express';
const router = express.Router();

/**
 * Controllers
 */
import * as userController from '../controllers/user';
import * as scheduleController from '../controllers/schedule';

/**
 * ============== Non-protected routes =============
 */
// @ts-ignore
router.post('/signup', validators.signupValidator, userController.signup);
// @ts-ignore
router.post('/signin', userController.signin);

/**
 * ============== Protected routes =================
 */
// Middleware that checks JWT token
router.all("*", checkAuthorization);
// Attaches current user to request
// @ts-ignore
router.all("*", MW.attachUserToRequest);

// Schedule routes
// @ts-ignore
router.post('/schedule', checkUserRole(['admin']), validators.createSchedule, scheduleController.createSchedule)

// Send error for API root
router.get("/", function (req, res) {
    return sendError(createError(418, 'No permission'), res)
});

export const mainRouter = router;