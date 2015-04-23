#!/usr/bin/env node

var argv = require('optimist')
    .default('port', 3000)
    .default('dir', '')
    .argv;
var express = require('express');
var currentDir = process.cwd();
var path = require('path');
// Setup server
var app = express();
var server = require('http').createServer(app);

app.use(express.static(path.resolve(currentDir,argv.dir)));
app.set('appPath', path.resolve(currentDir,argv.dir));

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
server.listen(argv.port, function () {
    console.log('Angular Server PORT: %d ', argv.port);
    console.log('Server Public Directory Path: %s ', app.get('appPath'));
});