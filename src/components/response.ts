'use strict';

/**
 * Project response
 */


/**
 * Send response if success
 * @param {number} code
 * @param {object} res
 * @returns {Response}
 */
export function sendResponse(code?: number, res?: any) {
    return (err: any, result: any) => {
        const status = code || 200
        if (err) return sendError(err, res)
        else res.status(status).json({success: true, message: result});
    }
}

/**
 * Send response if error
 * @param {object} err
 * @param {object} res
 * @returns {Response}
 */
export function sendError(err: any, res: any): void {

    const error = err.error || err.errors || err.message || err;
    const status = err.status || 500;

    res.status(status).json({success: false, message: error})

}

