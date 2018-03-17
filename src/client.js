import React from 'react';
import ReactDOM from 'react-dom';
import config from '../server/config';
import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import main from './redux/reducers/mainReducer';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { routerReducer, ConnectedRouter, routerMiddleware, push } from 'react-router-redux';


import setupSocket from './socket';
import App from './App';

import './theme/styles.scss';
import './resources/favicon.ico';
//import './pages/home/large_size_image.jpg';     // Travis-CI does not like image-webpack-loader so compress the images here and then comment the lines out once ready to push the project to Github/TravisCI

// Importing Bootstrap JS in dependency tree          // this can be done in webpack.config though with the webpack.ProvidePlugin to load these packages upon building it so we can keep our code cleaner with less requires and imports
import $ from 'jquery';
window.Popper = require('popper.js').default;
window.jQuery = $;                                  // the libraries are assigned to 'window' here in client.js since the SSR does not go into client, and only client side rendering is done here, in which the user's browser is running this code from bundle.js locally in the browser so there is automatically access to 'window', 'document' and all the other properties of window like 'window.navigator' and the ones we set 'window.$' and 'window.Popper'
window.$ = $;
global.jQuery = $;
const bootstrap = require('bootstrap');             // configures bootstrap javascript

//const bmd = require('bootstrap-material-design');     // configure project for bootstrap-material-design (js) instead of normal bootstrap. Still need popper.js and jquery, so only remove the require('bootstrap')
//window.$('body').bootstrapMaterialDesign();



const composeEnhancers = (config.isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//var preloadedState = {main: {pageTitle: "Debugging"}};    // use for debugging client without SSR
let preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;                  // deletes global variable for security, to save memory, and to avoid conflicts with router functions



// Create browser history                 - (or history api of your choosing)
const history = createHistory();
const routerware = routerMiddleware(history);   // build the middleware using our chosen history api that will be used for intercepting and dispatching navigation actions


// Add routerReducer to our reducers
const allReducers = combineReducers({
    main: main,
    router: routerReducer,     // add the routerReducer on the 'router' key for it to route properly and add with the rest of our 'reducers' that we add together by passing them all into 'combineReducers' including our already combined reducers that we add in with ...reducers
});



const store = createStore(
    allReducers,
    { main: preloadedState.main },                     // adds the preloadedState received from the server rendering as the preloadedState for our client store so it matches up with the server store
    composeEnhancers(applyMiddleware(
        routerware,                             // add the routerMiddleware (with history configured) for the purpose of navigating
        thunk,
        config.isProd ? null : createLogger(),      // log only in dev
    ))
);

//store.dispatch(push('/about'));       // Now we can dispatch navigation actions from anywhere with react-router-redux enabled.. This should be done in <App/> though, otherwise if you do it here, it will only change the url but not push the location since ConnectedRouter is not setup yet



ReactDOM.hydrate(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root')
);



/*
 * Setup Socket.io on Client                // Socket.io setup on the 'store' should be at the very end of the file so it does not slow down the client side rendering of App, and does not interfere with the 'store' before it is sent into the Provider wrapper
 */

setupSocket(store);         // we pass the store into our socket.io config where the socket will be configured as usual on a client, except we can now use the Store to dispatch actions ( store.dispatch(sayHello()) or store.dispatch(push(servePage)) ) upon handling messages (socket.on(IO_SERVER_HELLO)) the server sends to the client or sending data we reference from the store like 'store.main.hello' or 'store.main.contests' to send the entire contests list to the server in a socket.emit()





/*      BROWSER ROUTER
const store = createStore(
    combineReducers({
        main,
    }),
    { main: preloadedState.main },
    composeEnhancers(applyMiddleware(
        thunk,
        config.isProd ? null : createLogger(),
    ))
);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);
*/








/* ___ HOT RELOADING CODE ___

import { AppContainer } from 'react-hot-loader';        // wrapper around <App/> which will enable it for live edit with the hot module replacement configured in Webpack and here with the module.hot re-rendering at the bottom of the file


const renderApp = (TheApp, store) => {      // create a wrapper here so App can be hydrated initially for the client in the first ReactDOM.hydrate(), and then run ReactDOM.hydrate() in the hot replacement if statement 'if(module.hot)' that will be triggered whenever there are changes in the code and trigger the ReactDOM to hydrate and update the app again in live edit
    ReactDOM.hydrate(
        <Provider store={store}>
            <BrowserRouter>
                <AppContainer>
                    <TheApp/>
                </AppContainer>
            </BrowserRouter>
        </Provider>
        , document.getElementById('root')
    )
};

renderApp(App, store);        // initial rendering of client App  (below is the re-rendering during live edit)


if(module.hot) {                        // triggered whenever a change is made, and then module.hot.accept() will re-import ./App and hydrate it on the client
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        renderApp(App);                   // needs all the wrapper components to re-render
    })
}*/
