'use strict';

/**
 * Advertisement model
 */

/**
 * Dependencies
 */
import {Table, Column, Model} from 'sequelize-typescript';

@Table({
    tableName: 'advertisements',
    timestamps: true
})

/**
 * Exports
 */
export class Advertisement extends Model<Advertisement> {

    @Column
    date: Date;

    @Column
    time: 'TIME';

    @Column
    description: string;

}

