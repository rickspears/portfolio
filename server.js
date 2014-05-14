//Required libraries
var async = require('async');
var express = require('express');
var http = require('http');
var path = require('path');
var socketio = require('socket.io');

var controllers = require('./controllers');

var app = express();
var server = http.createServer(app);
var io = socketio.listen(server);

app.set("view engine", "vash");
app.use(express.static(path.resolve(__dirname, 'client')));
