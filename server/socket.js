var {
    IO_CONNECT,
    IO_DISCONNECT,
    IO_CLIENT_JOIN_ROOM,
    IO_CLIENT_HELLO,
    IO_SERVER_HELLO,            // the IO_SERVER is the output from the server, while the IO_CLIENT is the input into the server from the clients
} = require('./config');


module.exports = function(io) {         // configuration of how the server reacts when clients connect and send messages to it

    io.on(IO_CONNECT, function(socket) {                                       // all logic occurs within the socketIO connection which is made when the client connects (in this case it is when the client page is loaded and the connection is made automatically as part of th client.js thread) and the server gets access to the 'socket' (the connection between the client/server) which we can use to communicate back to that client and it is added into our 'io.sockets' that holds a list of all the server's currently connected sockets
        console.log('[socket.io] A client connected. Socket ID: ' + socket.id);         // log the socket unique id on the server console

        socket.on(IO_CLIENT_JOIN_ROOM, function(room) {             // receives IO_CLIENT_JOIN_ROOM event from client when the client wants to join a certain room that it specifies and the server receives in the callback as 'room', which the server then uses to join the already connected 'socket' to the 'room' it signified in the JOIN_ROOM event, and then our server will send three messages afterwards within this handler scope
            socket.join(room);                                          // joins client socket to the 'room' the client passes to the server
            console.log('[socket.io] A client joined room ' + room);

            io.emit(IO_SERVER_HELLO, 'Hello Everyone');                             // io.emit() sends a message to all the sockets connected to the server.. IO_SERVER_HELLO is the event type that is used to send out all three messages here and they all use the same type name since they are all three just server messages that send out a "Hello" type message and the clients will be able to then receive all three by using the same event listener for IO_SERVER_HELLO instead of having to create three different listeners for three different events
            io.to(room).emit(IO_SERVER_HELLO, 'Hello clients of room ' + room);     // sends hello message to only the sockets joined in that 'room', in which 'to(room)' just pertains making an action with just those sockets in the room and then .emit() after tells it to emit a message to those sockets in the room
            socket.emit(IO_SERVER_HELLO, 'Hello You');                            // emits a hello message ONLY back to the specific 'socket' connection (client) that the server received the JOIN_ROOM event from in the first place
        });

        socket.on(IO_CLIENT_HELLO, function(clientMessage) {        // the server listens for IO_CLIENT_HELLO event sent from the clients to the server and when the clients send one, the server just logs the message they sent
            console.log('[socket.io] Client: ' + clientMessage);
        });

        socket.on(IO_DISCONNECT, function() {                   // the client will disconnect itself from the server automatically when the browser refreshes or if the user navigates away from the host at localhost:3000, and then when it does disconnect it sends an IO_DISCONNECT event that the server logs to keep track of what sockets are currently connected and which ones have disconnected
            console.log('[socket.io] A client disconnected');
        });
    });
};