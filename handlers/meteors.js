'use strict';
var data = require('../data/data.js');
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
     */
    get: function getPatients(req, res, next) {
        res.send(data.meteor);
    }
};
