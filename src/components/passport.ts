"use strict";

/**
 * Passport configuration
 */

/**
 * Dependencies
 */
import passport from 'passport';
import {Strategy} from 'passport-local';
import {pool} from '../dataBase/models';
import {compare} from 'bcryptjs';

/**
 * Configuration
 */
passport.use(new Strategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email: string, password: string, done) => {
    try {

        const [result]: any = await pool.query(`select id, email, password from users where email = ${pool.escape(email)}`);

        if (!result) return done('Invalid username and password combination.');

        const isCompared: boolean = await compare(password, result.password);
        if (isCompared) return done(null, {id: result.id, email: result.email});
        else return done('Invalid username and password combination.');

    } catch (e) {
        return done(e)
    }
}));


