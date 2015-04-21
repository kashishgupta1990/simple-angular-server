#!/usr/bin/env node

// Change FRONT-END PORT here
var PORT = 3000;

// Change directory "public" here
var FolderName = '/' + 'dist';

/*Command line arguments
 * Command node app.js [PORT] [PUBLIC-DIR-PATH]*/
if (process.argv.length > 1) {
    PORT = (process.argv[2] && !isNaN(process.argv[2]) && +process.argv[2] ) || PORT;
    FolderName = process.argv[3] || FolderName;
}

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var completePath = path.join(__dirname, FolderName);
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
    console.log('Angular Front-End server listening on PORT: %d ', PORT);
    console.log('Server Public Directory Path: %s ', completePath);
});
