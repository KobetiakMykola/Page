'use strict';

/**
 * User model
 */

/**
 * Dependencies
 */
import {Table, Column, Model, Sequelize} from 'sequelize-typescript';

// @ts-ignore
@Table({
    tableName: 'users',
    timestamps: true,
    freezeTableName: true,

})


/**
 * Exports
 */
export class User extends Model<User> {

    @Column({validate: {min: 3, max: 23}})
    firstName: string;

    @Column({validate: {min: 3, max: 23}})
    secondName: string;

    @Column({unique: true, validate: {isEmail: true}})
    email: string;

    @Column({validate: {min: 8, max: 23}})
    password: string;

}

export interface IGetUser {
    id: number
}

