#!/usr/bin/env node

// Change FRONT-END PORT here
var PORT = 3000;

// Change directory "public" here
var completePath = './';

/*Command line arguments
 * Command node app.js [PORT] [PUBLIC-DIR-PATH]*/
if (process.argv.length > 1) {
    PORT = (process.argv[2] && !isNaN(process.argv[2]) && +process.argv[2] ) || PORT;
    completePath = process.argv[3] || completePath;
}

var express = require('express');

// Setup server
var app = express();
var server = require('http').createServer(app);

app.use(express.static(completePath));
app.set('appPath', completePath);

// Insert routes below

// All undefined asset or api routes should return a 404
app.route('/:url(api|auth|components|app|bower_components|assets)/*')
    .get(function (req, res) {
        res.send("Error 404");
    });

// All other routes should redirect to the index.html
app.route('/*')
    .get(function (req, res) {
        res.sendfile(app.get('appPath') + '/index.html');
    });

// Start server
server.listen(PORT, function () {
    console.log('Angular Server PORT: %d ', PORT);
    console.log('Server Public Directory Path: %s ', app.get('appPath'));
});
