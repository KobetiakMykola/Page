'use strict'

/**
 * Schedule service
 */

/**
 * Dependencies
 */
import * as I from '../dataBase/interfaces/schedule'
import {pool} from "../dataBase/models";
import {Schedule} from "../dataBase/models/Schedule";

/**
 * Return schedule
 * @param {object} data
 * @param {function} next - callback
 */
export async function createSchedule(data: I.Schedule, next: any):Promise<void> {
    try {

        const [exist]: any = await pool.query(`select type from schedules where date = '${data.date}' and time = '${data.time}'`);
        if (exist) throw new Error('Schedule already exist for this date and time');

        const schedule: Schedule = await Schedule.create(data)
        return next(null, schedule)

    } catch (e) {
        return next(e)
    }
}