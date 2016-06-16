/**
 * Created by kafui on 6/15/2016.
 */
var express = require('express');
var app = express();
var port = 3000;
var middleware = require('./middleware.js');

/*app.get('/', function (req,res) {
    res.send('welcome to express');
});*/
/*var middleware = {
    requireAuthentication: function (req,res,next) {
        console.log('private route hit!');
        next();
    },
    logger: function (req,res,next) {
        console.log('Request: ' +req.method + ''+req.originalUrl + ' on ' + new Date().toString());
        next();
    }
};*/
app.use(middleware.logger);
//app.use(middleware.requireAuthentication);
app.get('/about',middleware.requireAuthentication, function(req,res){
    res.send('About us!!')
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
    console.log('Express server started @ port: ' + port);
});