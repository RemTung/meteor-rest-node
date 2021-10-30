'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /meteors
 */
module.exports = {
    /**
     * summary: Get all meteors
     * description:
     * parameters:
     * produces: application/json
     * responses: 200, 405
     * operationId: getMeteors
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/meteors',
                operation: 'get',
                response: '200'
            }, callback);
        },
        405: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/meteors',
                operation: 'get',
                response: '405'
            }, callback);
        }
    }
};
