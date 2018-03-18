import socketIOClient from 'socket.io-client';      // this is a realtime framework for a client-side socket-io connection that automatically handles the a lot of the client functionality with socket.io like with connecting, in which calling the 'socketIOClient()' function on the host/port 'localhost:3000' will stand-in in place of io.connect() from socket.io library, and instead socketIOClient() returns a 'socket' just like socket.io would, and
import {
    IO_CONNECT,
    IO_DISCONNECT,
    IO_CLIENT_HELLO,
    IO_CLIENT_JOIN_ROOM,
    IO_SERVER_HELLO,
} from '../server/config';

import { sayHello } from './redux/actions/mainActions';     // imports 'sayHello()' action to be used here by our sockets as a resultant of our server sending a message to the client which we pass to this action as the payload
import { selectHello } from './redux/reducers';


let socket;

const setupSocket = (store) => {           // store is passed into our socket config function so we can use it to send out store data and then dispatch actions to the store as a response to incoming data from the server

                                 // localhost:3000    - hostname + port
    socket = socketIOClient(window.location.host);        // makes the connection to the server at host 'localhost:3000' and uses the socket.io-client framework to be able to handle client specific functionality and the socket.io connection will automatically disconnect when the client refreshes the page or navigates from it

    socket.on(IO_CONNECT, () => {                   // creates the connection to the server upon loading the page since this function just starts after the App is hydrated in client.js, so this makes the 'connect' event
        console.log('[socket.io] Connected');

        socket.emit(IO_CLIENT_JOIN_ROOM, 'hello-1234');             // send a join room event to ask the server to join the client to the specific room 'hello-1234' that the server is only able to configure since the room is handled from the server on its socket.io server
        socket.emit(IO_CLIENT_HELLO, `Hello Button Msg - 
                    ${store.getState().main.hello}`);             // sends a message to the server of event type IO_CLIENT_HELLO, which the server will receive it by referring to the event name, and we send back our 'hello' String that is currently stored in 'main.hello' of our store which we retrieve with 'store.getState()' to get the current data of the state, and this will allow us to use whatever is currently displayed on our page since both this store and the important Strings and objects on our page get their data from the same central current state in our store.. This is just one way to retrieve data from the current state using getState() directly on the 'store', but when we do not have direct access to the store, we can use redux selectors instead, however, this is the shortcut version of a selector, and can be used if we do not need to write the selector code if it is simple like this and does not need to be repeated later in our code
    });

    socket.on(IO_SERVER_HELLO, (serverMessage) => {             // receives 'IO_SERVER_HELLO' event type messages from the server and logs them in the client output log
        console.log(`[socket.io] Server: ${serverMessage}`);
        store.dispatch(sayHello(`Server: ${serverMessage}`));               // the message received from the server will be used as the payload in the sayHello() action that we dispatch from the store.dispatch() and this will change the 'hello' value in our current store 'state', so it will change the display of our page (and we could configure this to change a lot more like the entire state and look of the website by using it as a switch that is triggered)
    });

    socket.on(IO_DISCONNECT, () => {                // logs to show when the client disconnects from the server, which occurs whenever the client refreshes or navigates away from the host at 'localhost:3000'. But it retains the same socket instance without disconnecting if we just navigate between the links on the host and stay on the website
        console.log('[socket.io] Disconnected');
    })
};


const sendHelloMsgToServer = (state) => {
    socket.emit(IO_CLIENT_HELLO, `Hello Button Msg - 
                    ${selectHello(state)}`);
};


module.exports = {
    setupSocket,
    sendHelloMsgToServer,
};