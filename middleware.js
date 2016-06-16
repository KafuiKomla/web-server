/**
 * Created by kafui on 6/16/2016.
 */

    var middleware = {
        requireAuthentication: function (req,res,next) {
            console.log('private route hit!');
            next();
        },
        logger: function (req,res,next) {
            console.log('Request: ' +req.method + ''+req.originalUrl + ' on ' + new Date().toString());
            next();
        }
    };
module.exports = middleware;