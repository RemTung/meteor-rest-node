'use strict';
var data = require('../../data/data.js');
/**
 * Operations on /meteor/{id}
 */
module.exports = {
    /**
     * summary: Get a meteor by Id
     * description:
     * parameters: id
     * produces: application/json
     * responses: 200, 405
     */
    get: function getMeteor(req, res, next) {
        res.send(data.meteor.find(record => record.id == req.params.id));
    }
};
