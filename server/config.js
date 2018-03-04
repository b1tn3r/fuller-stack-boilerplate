const env = process.env;

module.exports = {
    mongodbUri: 'mongodb://localhost:27017',
    port: env.PORT || 3000,
    host: env.HOST || '127.0.0.1',          // env.HOST is currently not existent but we can create it in our better-npm-run scripts and then input this config.HOST into our server/index.js file when we start the server with a HOST value
    get serverUrl() {
        return `http://${this.host}:${this.port}`;
    },

    apiPort: env.APIPORT || 3030,     // currently no in use (env.APIPORT is 3030 from better-npm-run tho)
    get apiUrl() {
        return `${this.serverUrl}/api`;
    },

    isProd: env.NODE_ENV === 'production',
    isDev: env.NODE_ENV === 'development',
    appName: 'Titan Global Tech',
    processName: env.name || 'mainapp',       // the name we designate to our pm2 process when we run our app with pm2 in production mode (we gave it this 'mainapp' name in our run script)


    // Socket.io Events                     // events to send messages between the client and server where both need to reference these events (the server and client versions) to synchronize with one another to pass back messages
    IO_CONNECT: 'connect',
    IO_DISCONNECT: 'disconnect',                // connect and disconnect are two events to connect to the socket between the client/server and then disconnect it so we don't have memory leaks from unused sockets
    IO_CLIENT_HELLO: 'client-hello',
    IO_CLIENT_JOIN_ROOM: 'client-join-room',            // event used by the client that is prefixed by 'IO_CLIENT' to signify it is an event to be utilized by client
    IO_SERVER_HELLO: 'server-hello',                    // event to be used by server by prefixing with 'IO_SERVER'
};