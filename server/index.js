#!/usr/bin/env node


/* Module dependencies. */

var app = require('../middleware.bundle.js');
var debug = require('debug')('routed-redux-full-stack:server');
var http = require('http');
var socketIO = require('socket.io');

var config = require('./config');
var setupSocket = require('./socket');



/* Get port from environment and store in Express. */

var port = normalizePort(config.port || 5000);      // will be PORT=5000 as specified in "Config Vars" on Heroku server instance or here as backup or it will be '3000' for running on localhost in local computer environment when we use a script in package.json which uses our better-npm-run scripts that specify process.env.PORT to be '3000' for 'localhost:3000', in which it is diff on Heroku
app.set('port', port);



/* Create HTTP server. */

var server = http.createServer(app);



/* Setup Socket.io on Server */

var io = socketIO(server);
setupSocket(io);                // configure socket.io on the server in 'socket.js'



/* Listen on provided port, on all network interfaces. */

server.listen(port);            // DO NOT add a host param here or it will cause a Failed to bind $PORT error
server.on('error', onError);
server.on('listening', onListening);



/* Normalize a port into a number, string, or false. */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}


/* Event listener for HTTP server "error" event. */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}


/* Event listener for HTTP server "listening" event. */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);

    console.log(`
    ++---------------------------------------------
    || Server Running...                       
    ||                                         
    || On Port: ${config.port}                 
    ||  & Host: ${config.host}                 
    || At address: ${config.serverUrl}          
    ||                                         
    || Running in ${config.isProd ? 'Production' : 'Development'} mode.
    ||
    ++---------------------------------------------
    `);
}