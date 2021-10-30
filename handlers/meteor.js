'use strict';
var dataProvider = require('../data/meteor.js');
/**
 * Operations on /meteor
 */
module.exports = {
    /**
     * summary: Add a new meteor
     * description:
     * parameters: body
     * produces: application/json
     * responses: 200, 405
     */
    post: function addMeteor(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
