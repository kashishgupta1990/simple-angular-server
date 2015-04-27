#!/usr/bin/env node

var argv = require('optimist')
    .default('port', 3000)
    .default('dir', '')
    .default('file', 'index.html')
    .argv;
var express = require('express');
var currentDir = process.cwd();
var path = require('path');

// Setup server
var app = express();
function _define(name, value) {
    Object.defineProperty(global, name, {
        value: value,
        enumerable: true,
        writable: false,
        configurable: false
    });
}
var server = require('http').createServer(app);
_define('app', app);
app.use(express.static(path.resolve(currentDir, argv.dir)));
app.set('appPath', path.resolve(currentDir, argv.dir));

//Serve (index.html) file for each route call
app.route('/*').get(function (req, res) {
    res.sendfile(path.resolve(app.get('appPath'), argv.file));
});

// Start server
server.listen(argv.port, function () {
    console.log('Server Public Directory Path: %s ', app.get('appPath'));
    console.log('Main Angular File Path: ', path.resolve(app.get('appPath'), argv.file));
    console.log('Angular Server PORT: %d ', argv.port);
});
