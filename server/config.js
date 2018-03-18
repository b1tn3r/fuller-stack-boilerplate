const env = process.env;

module.exports = {
    port: env.PORT || 5000,
    host: env.HOST || '127.0.0.1',          // env.HOST is currently not existent but we can create it in our better-npm-run scripts and then input this config.HOST into our server/index.js file when we start the server with a HOST value
    get serverUrl() {
        return `http://${this.host}:${this.port}`;
    },

    apiPort: env.APIPORT || 3030,     // currently no in use (env.APIPORT is 3030 from better-npm-run tho)

    isProd: env.NODE_ENV === 'production',
    isDev: env.NODE_ENV === 'development',
    appName: 'Titan Global Tech',
    processName: env.name || 'mainapp',       // the name we designate to our pm2 process when we run our app with pm2 in production mode (we gave it this 'mainapp' name in our run script)

    // MongoDB
    /*mongodbUri: 'mongodb://localhost:27017',*/                     // URI for a localhost connection to your local mongodb server
    mongodbUri: 'mongodb://username:password@ds157818.mlab.com:57818',          // remote connection URI to MongoDB server on mLab.com.. enter as 'mongodb://[username]:[password]@hostname:port/database-name' which will be provided by mLab created database instance and set database in 'api/index.js'

    // Socket.io Events                     // events to send messages between the client and server where both need to reference these events (the server and client versions) to synchronize with one another to pass back messages
    IO_CONNECT: 'connect',
    IO_DISCONNECT: 'disconnect',                // connect and disconnect are two events to connect to the socket between the client/server and then disconnect it so we don't have memory leaks from unused sockets
    IO_CLIENT_HELLO: 'client-hello',
    IO_CLIENT_JOIN_ROOM: 'client-join-room',            // event used by the client that is prefixed by 'IO_CLIENT' to signify it is an event to be utilized by client
    IO_SERVER_HELLO: 'server-hello',                    // event to be used by server by prefixing with 'IO_SERVER'

    // If on Client/Server
    isSSR(){                                                                                                // checks if current thread is being rendered from the server side, in which it is specifically checking if the current 'process' environment is being called from a Node env on the Node server, and if it is then the running thread is calling isSSR() from the node server, but if not, then it is being called from the the local browser client environment which is not a Node env. This is useful for encapsulating libraries in the App's JSX so that the 'window', 'document', '$', 'navigator', etc. global variables do not try to get rendered from server-side since it will throw a 'not defined' error if it tries to and the library is not pre-rendered on the server, in which complex libraries like Leaflet Maps can be rendered following instructions like these: "https://medium.com/@pimterry/building-a-server-rendered-map-component-part-2-using-client-side-libraries-6f1bb751f31c"
        return (typeof process !== 'undefined') && (process.release) && (process.release.name === 'node');
    },
};