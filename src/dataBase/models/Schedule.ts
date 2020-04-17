'use strict';

/**
 * Schedule model
 */

/**
 * Dependencies
 */
import {Table, Column, Model} from 'sequelize-typescript';

@Table({
    tableName: 'schedules',
    timestamps: true
})

/**
 * Exports
 */
export class Schedule extends Model<Schedule> {

    @Column
    date: Date;

    @Column
    time: 'TIME';

    @Column
    type: string;

    @Column
    description: string;

}

