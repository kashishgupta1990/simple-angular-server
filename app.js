#!/usr/bin/env node

var argv = require('optimist')
    .default('port', 3000)
    .default('dir', '')
    .default('file', 'index.html')
    .argv;

var express = require('express');
var currentDir = process.cwd();
var path = require('path');

var clc = require('cli-color');

var green = clc.green.bold;
var blue = clc.blue.bold;
var red = clc.red;

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
    console.log('');
    console.log(red('-------------------- Angular Server Running --------------------'));
    console.log(blue('Public Directory Path: '), green(app.get('appPath')));
    console.log(blue('Main Angular File Path: '),green(path.resolve(app.get('appPath'), argv.file)));
    console.log(blue('Server Listening on PORT: '), green(argv.port));
    console.log(red('----------------------------------------------------------------'));
});
