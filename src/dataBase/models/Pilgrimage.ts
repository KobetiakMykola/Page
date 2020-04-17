'use strict';

/**
 * Pilgrimage model
 */

/**
 * Dependencies
 */
import {Table, Column, Model} from 'sequelize-typescript';

@Table({
    tableName: 'pilgrimages',
    timestamps: true
})

/**
 * Exports
 */
export class Pilgrimage extends Model<Pilgrimage> {

    @Column
    date: Date;

    @Column
    time: 'TIME';

    @Column
    type: string;

    @Column
    title: string;

    @Column
    description: string;

    @Column
    imgUrl: string;

}

