'use strict'

/**
 * Schedule controller
 */

/**
 * Dependencies
 */
import {sendResponse} from "../components/response";
import * as scheduleService from '../services/schedule';

/**
 * Validates user's credentials and sends JWT token
 * @param {object} req
 * @param {object} res
 */
export function createSchedule(req: Request, res: Response) {
    const schedule: any = req.body;
    scheduleService.createSchedule(schedule, sendResponse(200, res))
}
