webpackHotUpdate(0,{

/***/ "./src/client.js":
/*!***********************!*\
  !*** ./src/client.js ***!
  \***********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module, global) {\n\nvar _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === \"function\" && Symbol.for && Symbol.for(\"react.element\") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();\n//import './pages/home/large_size_image.jpg';     // Travis-CI does not like image-webpack-loader so compress the images here and then comment the lines out once ready to push the project to Github/TravisCI\n\n// Importing Bootstrap JS in dependency tree          // this can be done in webpack.config though with the webpack.ProvidePlugin to load these packages upon building it so we can keep our code cleaner with less requires and imports\n\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _config = __webpack_require__(/*! ../server/config */ \"./server/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/index.js\");\n\nvar _mainReducer = __webpack_require__(/*! ./redux/reducers/mainReducer */ \"./src/redux/reducers/mainReducer.js\");\n\nvar _reduxLogger = __webpack_require__(/*! redux-logger */ \"./node_modules/redux-logger/dist/redux-logger.js\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/lib/index.js\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _createBrowserHistory = __webpack_require__(/*! history/createBrowserHistory */ \"./node_modules/history/createBrowserHistory.js\");\n\nvar _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);\n\nvar _reactRouterRedux = __webpack_require__(/*! react-router-redux */ \"./node_modules/react-router-redux/es/index.js\");\n\nvar _socket = __webpack_require__(/*! ./socket */ \"./src/socket.js\");\n\nvar _App = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\n__webpack_require__(/*! ./theme/styles.scss */ \"./src/theme/styles.scss\");\n\n__webpack_require__(/*! ./resources/favicon.ico */ \"./src/resources/favicon.ico\");\n\nvar _jquery = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js-exposed\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow.Popper = __webpack_require__(/*! popper.js */ \"./node_modules/popper.js/dist/esm/popper.js\").default;\nwindow.jQuery = _jquery2.default; // the libraries are assigned to 'window' here in client.js since the SSR does not go into client, and only client side rendering is done here, in which the user's browser is running this code from bundle.js locally in the browser so there is automatically access to 'window', 'document' and all the other properties of window like 'window.navigator' and the ones we set 'window.$' and 'window.Popper'\nwindow.$ = _jquery2.default;\nglobal.jQuery = _jquery2.default;\nvar bootstrap = __webpack_require__(/*! bootstrap */ \"./node_modules/bootstrap/dist/js/bootstrap.js\"); // configures bootstrap javascript\n\n//const bmd = require('bootstrap-material-design');     // configure project for bootstrap-material-design (js) instead of normal bootstrap. Still need popper.js and jquery, so only remove the require('bootstrap')\n//window.$('body').bootstrapMaterialDesign();\n\n\nvar composeEnhancers = (_config2.default.isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || _redux.compose;\n\n//var preloadedState = {main: {pageTitle: \"Debugging\"}};    // use for debugging client without SSR\nvar preloadedState = window.__PRELOADED_STATE__;\ndelete window.__PRELOADED_STATE__; // deletes global variable for security, to save memory, and to avoid conflicts with router functions\n\n\n// Create browser history                 - (or history api of your choosing)\nvar history = (0, _createBrowserHistory2.default)();\nvar routerware = (0, _reactRouterRedux.routerMiddleware)(history); // build the middleware using our chosen history api that will be used for intercepting and dispatching navigation actions\n\n\n// Add routerReducer to our reducers\nvar allReducers = (0, _redux.combineReducers)({\n    main: _mainReducer.mainReducer,\n    router: _reactRouterRedux.routerReducer // add the routerReducer on the 'router' key for it to route properly and add with the rest of our 'reducers' that we add together by passing them all into 'combineReducers' including our already combined reducers that we add in with ...reducers\n});\n\nvar store = (0, _redux.createStore)(allReducers, { main: preloadedState.main }, // adds the preloadedState received from the server rendering as the preloadedState for our client store so it matches up with the server store\ncomposeEnhancers((0, _redux.applyMiddleware)(routerware, // add the routerMiddleware (with history configured) for the purpose of navigating\n_reduxThunk2.default, _config2.default.isProd ? null : (0, _reduxLogger.createLogger)() // log only in dev\n)));\n\n//store.dispatch(push('/about'));       // Now we can dispatch navigation actions from anywhere with react-router-redux enabled.. This should be done in <App/> though, otherwise if you do it here, it will only change the url but not push the location since ConnectedRouter is not setup yet\n\n\n_reactDom2.default.hydrate(_jsx(_reactRedux.Provider, {\n    store: store\n}, void 0, _jsx(_reactRouterRedux.ConnectedRouter, {\n    history: history\n}, void 0, _jsx(_App2.default, {}))), document.getElementById('root'));\n\n/*\r\n * Setup Socket.io on Client                // Socket.io setup on the 'store' should be at the very end of the file so it does not slow down the client side rendering of App, and does not interfere with the 'store' before it is sent into the Provider wrapper\r\n */\n\n(0, _socket.setupSocket)(store); // we pass the store into our socket.io config where the socket will be configured as usual on a client, except we can now use the Store to dispatch actions ( store.dispatch(sayHello()) or store.dispatch(push(servePage)) ) upon handling messages (socket.on(IO_SERVER_HELLO)) the server sends to the client or sending data we reference from the store like 'store.main.hello' or 'store.main.contests' to send the entire contests list to the server in a socket.emit()\n\n\n/*      BROWSER ROUTER\r\nconst store = createStore(\r\n    combineReducers({\r\n        main,\r\n    }),\r\n    { main: preloadedState.main },\r\n    composeEnhancers(applyMiddleware(\r\n        thunk,\r\n        config.isProd ? null : createLogger(),\r\n    ))\r\n);\r\n\r\nReactDOM.hydrate(\r\n    <Provider store={store}>\r\n        <BrowserRouter>\r\n            <App />\r\n        </BrowserRouter>\r\n    </Provider>\r\n    , document.getElementById('root')\r\n);\r\n*/\n\n/* ___ HOT RELOADING CODE ___\r\n\r\nimport { AppContainer } from 'react-hot-loader';        // wrapper around <App/> which will enable it for live edit with the hot module replacement configured in Webpack and here with the module.hot re-rendering at the bottom of the file\r\n\r\n\r\nconst renderApp = (TheApp, store) => {      // create a wrapper here so App can be hydrated initially for the client in the first ReactDOM.hydrate(), and then run ReactDOM.hydrate() in the hot replacement if statement 'if(module.hot)' that will be triggered whenever there are changes in the code and trigger the ReactDOM to hydrate and update the app again in live edit\r\n    ReactDOM.hydrate(\r\n        <Provider store={store}>\r\n            <BrowserRouter>\r\n                <AppContainer>\r\n                    <TheApp/>\r\n                </AppContainer>\r\n            </BrowserRouter>\r\n        </Provider>\r\n        , document.getElementById('root')\r\n    )\r\n};\r\n\r\nrenderApp(App, store);        // initial rendering of client App  (below is the re-rendering during live edit)\r\n\r\n\r\nif(module.hot) {                        // triggered whenever a change is made, and then module.hot.accept() will re-import ./App and hydrate it on the client\r\n    module.hot.accept('./App', () => {\r\n        const NextApp = require('./App').default;\r\n        renderApp(App);                   // needs all the wrapper components to re-render\r\n    })\r\n}*/\n\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(composeEnhancers, 'composeEnhancers', 'D:/Programming/IntellijProjects/Java_Techniques/src/Other/Javascript/MERN_Stack/RoutedReduxFullStack/src/client.js');\n    reactHotLoader.register(preloadedState, 'preloadedState', 'D:/Programming/IntellijProjects/Java_Techniques/src/Other/Javascript/MERN_Stack/RoutedReduxFullStack/src/client.js');\n    reactHotLoader.register(history, 'history', 'D:/Programming/IntellijProjects/Java_Techniques/src/Other/Javascript/MERN_Stack/RoutedReduxFullStack/src/client.js');\n    reactHotLoader.register(routerware, 'routerware', 'D:/Programming/IntellijProjects/Java_Techniques/src/Other/Javascript/MERN_Stack/RoutedReduxFullStack/src/client.js');\n    reactHotLoader.register(allReducers, 'allReducers', 'D:/Programming/IntellijProjects/Java_Techniques/src/Other/Javascript/MERN_Stack/RoutedReduxFullStack/src/client.js');\n    reactHotLoader.register(store, 'store', 'D:/Programming/IntellijProjects/Java_Techniques/src/Other/Javascript/MERN_Stack/RoutedReduxFullStack/src/client.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module), __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jbGllbnQuanM/Y2YyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJztcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBtYWluUmVkdWNlciB9IGZyb20gJy4vcmVkdXgvcmVkdWNlcnMvbWFpblJlZHVjZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVMb2dnZXIgfSBmcm9tICdyZWR1eC1sb2dnZXInO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCBjcmVhdGVIaXN0b3J5IGZyb20gJ2hpc3RvcnkvY3JlYXRlQnJvd3Nlckhpc3RvcnknO1xyXG5pbXBvcnQgeyByb3V0ZXJSZWR1Y2VyLCBDb25uZWN0ZWRSb3V0ZXIsIHJvdXRlck1pZGRsZXdhcmUsIHB1c2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xyXG5cclxuXHJcbmltcG9ydCB7IHNldHVwU29ja2V0IH0gZnJvbSAnLi9zb2NrZXQnO1xyXG5cclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XHJcblxyXG5pbXBvcnQgJy4vdGhlbWUvc3R5bGVzLnNjc3MnO1xyXG5pbXBvcnQgJy4vcmVzb3VyY2VzL2Zhdmljb24uaWNvJztcclxuLy9pbXBvcnQgJy4vcGFnZXMvaG9tZS9sYXJnZV9zaXplX2ltYWdlLmpwZyc7ICAgICAvLyBUcmF2aXMtQ0kgZG9lcyBub3QgbGlrZSBpbWFnZS13ZWJwYWNrLWxvYWRlciBzbyBjb21wcmVzcyB0aGUgaW1hZ2VzIGhlcmUgYW5kIHRoZW4gY29tbWVudCB0aGUgbGluZXMgb3V0IG9uY2UgcmVhZHkgdG8gcHVzaCB0aGUgcHJvamVjdCB0byBHaXRodWIvVHJhdmlzQ0lcclxuXHJcbi8vIEltcG9ydGluZyBCb290c3RyYXAgSlMgaW4gZGVwZW5kZW5jeSB0cmVlICAgICAgICAgIC8vIHRoaXMgY2FuIGJlIGRvbmUgaW4gd2VicGFjay5jb25maWcgdGhvdWdoIHdpdGggdGhlIHdlYnBhY2suUHJvdmlkZVBsdWdpbiB0byBsb2FkIHRoZXNlIHBhY2thZ2VzIHVwb24gYnVpbGRpbmcgaXQgc28gd2UgY2FuIGtlZXAgb3VyIGNvZGUgY2xlYW5lciB3aXRoIGxlc3MgcmVxdWlyZXMgYW5kIGltcG9ydHNcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5Jztcclxud2luZG93LlBvcHBlciA9IHJlcXVpcmUoJ3BvcHBlci5qcycpLmRlZmF1bHQ7XHJcbndpbmRvdy5qUXVlcnkgPSAkOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgbGlicmFyaWVzIGFyZSBhc3NpZ25lZCB0byAnd2luZG93JyBoZXJlIGluIGNsaWVudC5qcyBzaW5jZSB0aGUgU1NSIGRvZXMgbm90IGdvIGludG8gY2xpZW50LCBhbmQgb25seSBjbGllbnQgc2lkZSByZW5kZXJpbmcgaXMgZG9uZSBoZXJlLCBpbiB3aGljaCB0aGUgdXNlcidzIGJyb3dzZXIgaXMgcnVubmluZyB0aGlzIGNvZGUgZnJvbSBidW5kbGUuanMgbG9jYWxseSBpbiB0aGUgYnJvd3NlciBzbyB0aGVyZSBpcyBhdXRvbWF0aWNhbGx5IGFjY2VzcyB0byAnd2luZG93JywgJ2RvY3VtZW50JyBhbmQgYWxsIHRoZSBvdGhlciBwcm9wZXJ0aWVzIG9mIHdpbmRvdyBsaWtlICd3aW5kb3cubmF2aWdhdG9yJyBhbmQgdGhlIG9uZXMgd2Ugc2V0ICd3aW5kb3cuJCcgYW5kICd3aW5kb3cuUG9wcGVyJ1xyXG53aW5kb3cuJCA9ICQ7XHJcbmdsb2JhbC5qUXVlcnkgPSAkO1xyXG5jb25zdCBib290c3RyYXAgPSByZXF1aXJlKCdib290c3RyYXAnKTsgICAgICAgICAgICAgLy8gY29uZmlndXJlcyBib290c3RyYXAgamF2YXNjcmlwdFxyXG5cclxuLy9jb25zdCBibWQgPSByZXF1aXJlKCdib290c3RyYXAtbWF0ZXJpYWwtZGVzaWduJyk7ICAgICAvLyBjb25maWd1cmUgcHJvamVjdCBmb3IgYm9vdHN0cmFwLW1hdGVyaWFsLWRlc2lnbiAoanMpIGluc3RlYWQgb2Ygbm9ybWFsIGJvb3RzdHJhcC4gU3RpbGwgbmVlZCBwb3BwZXIuanMgYW5kIGpxdWVyeSwgc28gb25seSByZW1vdmUgdGhlIHJlcXVpcmUoJ2Jvb3RzdHJhcCcpXHJcbi8vd2luZG93LiQoJ2JvZHknKS5ib290c3RyYXBNYXRlcmlhbERlc2lnbigpO1xyXG5cclxuXHJcblxyXG5jb25zdCBjb21wb3NlRW5oYW5jZXJzID0gKGNvbmZpZy5pc1Byb2QgPyBudWxsIDogd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXykgfHwgY29tcG9zZTtcclxuXHJcbi8vdmFyIHByZWxvYWRlZFN0YXRlID0ge21haW46IHtwYWdlVGl0bGU6IFwiRGVidWdnaW5nXCJ9fTsgICAgLy8gdXNlIGZvciBkZWJ1Z2dpbmcgY2xpZW50IHdpdGhvdXQgU1NSXHJcbmxldCBwcmVsb2FkZWRTdGF0ZSA9IHdpbmRvdy5fX1BSRUxPQURFRF9TVEFURV9fO1xyXG5kZWxldGUgd2luZG93Ll9fUFJFTE9BREVEX1NUQVRFX187ICAgICAgICAgICAgICAgICAgLy8gZGVsZXRlcyBnbG9iYWwgdmFyaWFibGUgZm9yIHNlY3VyaXR5LCB0byBzYXZlIG1lbW9yeSwgYW5kIHRvIGF2b2lkIGNvbmZsaWN0cyB3aXRoIHJvdXRlciBmdW5jdGlvbnNcclxuXHJcblxyXG5cclxuLy8gQ3JlYXRlIGJyb3dzZXIgaGlzdG9yeSAgICAgICAgICAgICAgICAgLSAob3IgaGlzdG9yeSBhcGkgb2YgeW91ciBjaG9vc2luZylcclxuY29uc3QgaGlzdG9yeSA9IGNyZWF0ZUhpc3RvcnkoKTtcclxuY29uc3Qgcm91dGVyd2FyZSA9IHJvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSk7ICAgLy8gYnVpbGQgdGhlIG1pZGRsZXdhcmUgdXNpbmcgb3VyIGNob3NlbiBoaXN0b3J5IGFwaSB0aGF0IHdpbGwgYmUgdXNlZCBmb3IgaW50ZXJjZXB0aW5nIGFuZCBkaXNwYXRjaGluZyBuYXZpZ2F0aW9uIGFjdGlvbnNcclxuXHJcblxyXG4vLyBBZGQgcm91dGVyUmVkdWNlciB0byBvdXIgcmVkdWNlcnNcclxuY29uc3QgYWxsUmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgbWFpbjogbWFpblJlZHVjZXIsXHJcbiAgICByb3V0ZXI6IHJvdXRlclJlZHVjZXIsICAgICAvLyBhZGQgdGhlIHJvdXRlclJlZHVjZXIgb24gdGhlICdyb3V0ZXInIGtleSBmb3IgaXQgdG8gcm91dGUgcHJvcGVybHkgYW5kIGFkZCB3aXRoIHRoZSByZXN0IG9mIG91ciAncmVkdWNlcnMnIHRoYXQgd2UgYWRkIHRvZ2V0aGVyIGJ5IHBhc3NpbmcgdGhlbSBhbGwgaW50byAnY29tYmluZVJlZHVjZXJzJyBpbmNsdWRpbmcgb3VyIGFscmVhZHkgY29tYmluZWQgcmVkdWNlcnMgdGhhdCB3ZSBhZGQgaW4gd2l0aCAuLi5yZWR1Y2Vyc1xyXG59KTtcclxuXHJcblxyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuICAgIGFsbFJlZHVjZXJzLFxyXG4gICAgeyBtYWluOiBwcmVsb2FkZWRTdGF0ZS5tYWluIH0sICAgICAgICAgICAgICAgICAgICAgLy8gYWRkcyB0aGUgcHJlbG9hZGVkU3RhdGUgcmVjZWl2ZWQgZnJvbSB0aGUgc2VydmVyIHJlbmRlcmluZyBhcyB0aGUgcHJlbG9hZGVkU3RhdGUgZm9yIG91ciBjbGllbnQgc3RvcmUgc28gaXQgbWF0Y2hlcyB1cCB3aXRoIHRoZSBzZXJ2ZXIgc3RvcmVcclxuICAgIGNvbXBvc2VFbmhhbmNlcnMoYXBwbHlNaWRkbGV3YXJlKFxyXG4gICAgICAgIHJvdXRlcndhcmUsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdGhlIHJvdXRlck1pZGRsZXdhcmUgKHdpdGggaGlzdG9yeSBjb25maWd1cmVkKSBmb3IgdGhlIHB1cnBvc2Ugb2YgbmF2aWdhdGluZ1xyXG4gICAgICAgIHRodW5rLFxyXG4gICAgICAgIGNvbmZpZy5pc1Byb2QgPyBudWxsIDogY3JlYXRlTG9nZ2VyKCksICAgICAgLy8gbG9nIG9ubHkgaW4gZGV2XHJcbiAgICApKVxyXG4pO1xyXG5cclxuLy9zdG9yZS5kaXNwYXRjaChwdXNoKCcvYWJvdXQnKSk7ICAgICAgIC8vIE5vdyB3ZSBjYW4gZGlzcGF0Y2ggbmF2aWdhdGlvbiBhY3Rpb25zIGZyb20gYW55d2hlcmUgd2l0aCByZWFjdC1yb3V0ZXItcmVkdXggZW5hYmxlZC4uIFRoaXMgc2hvdWxkIGJlIGRvbmUgaW4gPEFwcC8+IHRob3VnaCwgb3RoZXJ3aXNlIGlmIHlvdSBkbyBpdCBoZXJlLCBpdCB3aWxsIG9ubHkgY2hhbmdlIHRoZSB1cmwgYnV0IG5vdCBwdXNoIHRoZSBsb2NhdGlvbiBzaW5jZSBDb25uZWN0ZWRSb3V0ZXIgaXMgbm90IHNldHVwIHlldFxyXG5cclxuXHJcblxyXG5SZWFjdERPTS5oeWRyYXRlKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgPENvbm5lY3RlZFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cclxuICAgICAgICAgICAgPEFwcCAvPlxyXG4gICAgICAgIDwvQ29ubmVjdGVkUm91dGVyPlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICAgICwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxyXG4pO1xyXG5cclxuXHJcblxyXG4vKlxyXG4gKiBTZXR1cCBTb2NrZXQuaW8gb24gQ2xpZW50ICAgICAgICAgICAgICAgIC8vIFNvY2tldC5pbyBzZXR1cCBvbiB0aGUgJ3N0b3JlJyBzaG91bGQgYmUgYXQgdGhlIHZlcnkgZW5kIG9mIHRoZSBmaWxlIHNvIGl0IGRvZXMgbm90IHNsb3cgZG93biB0aGUgY2xpZW50IHNpZGUgcmVuZGVyaW5nIG9mIEFwcCwgYW5kIGRvZXMgbm90IGludGVyZmVyZSB3aXRoIHRoZSAnc3RvcmUnIGJlZm9yZSBpdCBpcyBzZW50IGludG8gdGhlIFByb3ZpZGVyIHdyYXBwZXJcclxuICovXHJcblxyXG5zZXR1cFNvY2tldChzdG9yZSk7ICAgICAgICAgLy8gd2UgcGFzcyB0aGUgc3RvcmUgaW50byBvdXIgc29ja2V0LmlvIGNvbmZpZyB3aGVyZSB0aGUgc29ja2V0IHdpbGwgYmUgY29uZmlndXJlZCBhcyB1c3VhbCBvbiBhIGNsaWVudCwgZXhjZXB0IHdlIGNhbiBub3cgdXNlIHRoZSBTdG9yZSB0byBkaXNwYXRjaCBhY3Rpb25zICggc3RvcmUuZGlzcGF0Y2goc2F5SGVsbG8oKSkgb3Igc3RvcmUuZGlzcGF0Y2gocHVzaChzZXJ2ZVBhZ2UpKSApIHVwb24gaGFuZGxpbmcgbWVzc2FnZXMgKHNvY2tldC5vbihJT19TRVJWRVJfSEVMTE8pKSB0aGUgc2VydmVyIHNlbmRzIHRvIHRoZSBjbGllbnQgb3Igc2VuZGluZyBkYXRhIHdlIHJlZmVyZW5jZSBmcm9tIHRoZSBzdG9yZSBsaWtlICdzdG9yZS5tYWluLmhlbGxvJyBvciAnc3RvcmUubWFpbi5jb250ZXN0cycgdG8gc2VuZCB0aGUgZW50aXJlIGNvbnRlc3RzIGxpc3QgdG8gdGhlIHNlcnZlciBpbiBhIHNvY2tldC5lbWl0KClcclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiAgICAgIEJST1dTRVIgUk9VVEVSXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXHJcbiAgICBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgICAgIG1haW4sXHJcbiAgICB9KSxcclxuICAgIHsgbWFpbjogcHJlbG9hZGVkU3RhdGUubWFpbiB9LFxyXG4gICAgY29tcG9zZUVuaGFuY2VycyhhcHBseU1pZGRsZXdhcmUoXHJcbiAgICAgICAgdGh1bmssXHJcbiAgICAgICAgY29uZmlnLmlzUHJvZCA/IG51bGwgOiBjcmVhdGVMb2dnZXIoKSxcclxuICAgICkpXHJcbik7XHJcblxyXG5SZWFjdERPTS5oeWRyYXRlKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgIDxBcHAgLz5cclxuICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gICAgLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcbik7XHJcbiovXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyogX19fIEhPVCBSRUxPQURJTkcgQ09ERSBfX19cclxuXHJcbmltcG9ydCB7IEFwcENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWhvdC1sb2FkZXInOyAgICAgICAgLy8gd3JhcHBlciBhcm91bmQgPEFwcC8+IHdoaWNoIHdpbGwgZW5hYmxlIGl0IGZvciBsaXZlIGVkaXQgd2l0aCB0aGUgaG90IG1vZHVsZSByZXBsYWNlbWVudCBjb25maWd1cmVkIGluIFdlYnBhY2sgYW5kIGhlcmUgd2l0aCB0aGUgbW9kdWxlLmhvdCByZS1yZW5kZXJpbmcgYXQgdGhlIGJvdHRvbSBvZiB0aGUgZmlsZVxyXG5cclxuXHJcbmNvbnN0IHJlbmRlckFwcCA9IChUaGVBcHAsIHN0b3JlKSA9PiB7ICAgICAgLy8gY3JlYXRlIGEgd3JhcHBlciBoZXJlIHNvIEFwcCBjYW4gYmUgaHlkcmF0ZWQgaW5pdGlhbGx5IGZvciB0aGUgY2xpZW50IGluIHRoZSBmaXJzdCBSZWFjdERPTS5oeWRyYXRlKCksIGFuZCB0aGVuIHJ1biBSZWFjdERPTS5oeWRyYXRlKCkgaW4gdGhlIGhvdCByZXBsYWNlbWVudCBpZiBzdGF0ZW1lbnQgJ2lmKG1vZHVsZS5ob3QpJyB0aGF0IHdpbGwgYmUgdHJpZ2dlcmVkIHdoZW5ldmVyIHRoZXJlIGFyZSBjaGFuZ2VzIGluIHRoZSBjb2RlIGFuZCB0cmlnZ2VyIHRoZSBSZWFjdERPTSB0byBoeWRyYXRlIGFuZCB1cGRhdGUgdGhlIGFwcCBhZ2FpbiBpbiBsaXZlIGVkaXRcclxuICAgIFJlYWN0RE9NLmh5ZHJhdGUoXHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICAgICAgPEFwcENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8VGhlQXBwLz5cclxuICAgICAgICAgICAgICAgIDwvQXBwQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcclxuICAgIClcclxufTtcclxuXHJcbnJlbmRlckFwcChBcHAsIHN0b3JlKTsgICAgICAgIC8vIGluaXRpYWwgcmVuZGVyaW5nIG9mIGNsaWVudCBBcHAgIChiZWxvdyBpcyB0aGUgcmUtcmVuZGVyaW5nIGR1cmluZyBsaXZlIGVkaXQpXHJcblxyXG5cclxuaWYobW9kdWxlLmhvdCkgeyAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRyaWdnZXJlZCB3aGVuZXZlciBhIGNoYW5nZSBpcyBtYWRlLCBhbmQgdGhlbiBtb2R1bGUuaG90LmFjY2VwdCgpIHdpbGwgcmUtaW1wb3J0IC4vQXBwIGFuZCBoeWRyYXRlIGl0IG9uIHRoZSBjbGllbnRcclxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuL0FwcCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCBOZXh0QXBwID0gcmVxdWlyZSgnLi9BcHAnKS5kZWZhdWx0O1xyXG4gICAgICAgIHJlbmRlckFwcChBcHApOyAgICAgICAgICAgICAgICAgICAvLyBuZWVkcyBhbGwgdGhlIHdyYXBwZXIgY29tcG9uZW50cyB0byByZS1yZW5kZXJcclxuICAgIH0pXHJcbn0qL1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NsaWVudC5qcyJdLCJtYXBwaW5ncyI6Ijs7O0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUF2QkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBTUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF0RkE7QUFHQTtBQU1BO0FBQ0E7QUFJQTtBQU9BOzs7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/client.js\n");

/***/ }),

/***/ "./src/redux/reducers/index.js":
/*!*************************************!*\
  !*** ./src/redux/reducers/index.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar _require = __webpack_require__(/*! redux */ \"./node_modules/redux/es/index.js\"),\n    combineReducers = _require.combineReducers;\n\nvar _require2 = __webpack_require__(/*! ./mainReducer */ \"./src/redux/reducers/mainReducer.js\"),\n    mainReducer = _require2.mainReducer,\n    helloSelector = _require2.helloSelector;\n\nvar reducers = combineReducers({\n    main: mainReducer\n});\n\n// Selectors                                             // place all selectors here so they are centralized\nvar selectHello = function selectHello(state) {\n    return helloSelector(state.main);\n}; // forwards the selectHello to the right branch/reducer in our store and forwards the selector for 'hello' to 'mainReducer' where 'store.getState().main.hello' will be returned\n\n\nmodule.exports = {\n    reducers: reducers,\n    selectHello: selectHello\n};\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(reducers, 'reducers', 'D:/Programming/IntellijProjects/Java_Techniques/src/Other/Javascript/MERN_Stack/RoutedReduxFullStack/src/redux/reducers/index.js');\n    reactHotLoader.register(selectHello, 'selectHello', 'D:/Programming/IntellijProjects/Java_Techniques/src/Other/Javascript/MERN_Stack/RoutedReduxFullStack/src/redux/reducers/index.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvcmVkdWNlcnMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzPzM0NzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjb21iaW5lUmVkdWNlcnMgfSA9IHJlcXVpcmUoJ3JlZHV4Jyk7XHJcblxyXG5jb25zdCB7IG1haW5SZWR1Y2VyLCBoZWxsb1NlbGVjdG9yIH0gPSByZXF1aXJlKCcuL21haW5SZWR1Y2VyJyk7XHJcblxyXG5jb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBtYWluOiBtYWluUmVkdWNlcixcclxufSk7XHJcblxyXG4vLyBTZWxlY3RvcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwbGFjZSBhbGwgc2VsZWN0b3JzIGhlcmUgc28gdGhleSBhcmUgY2VudHJhbGl6ZWRcclxuY29uc3Qgc2VsZWN0SGVsbG8gPSAoc3RhdGUpID0+IGhlbGxvU2VsZWN0b3Ioc3RhdGUubWFpbik7ICAgICAvLyBmb3J3YXJkcyB0aGUgc2VsZWN0SGVsbG8gdG8gdGhlIHJpZ2h0IGJyYW5jaC9yZWR1Y2VyIGluIG91ciBzdG9yZSBhbmQgZm9yd2FyZHMgdGhlIHNlbGVjdG9yIGZvciAnaGVsbG8nIHRvICdtYWluUmVkdWNlcicgd2hlcmUgJ3N0b3JlLmdldFN0YXRlKCkubWFpbi5oZWxsbycgd2lsbCBiZSByZXR1cm5lZFxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgcmVkdWNlcnMsXHJcbiAgICBzZWxlY3RIZWxsbyxcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7O0FBUkE7QUFLQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/reducers/index.js\n");

/***/ }),

/***/ "./src/redux/reducers/mainReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/mainReducer.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar _immutable = __webpack_require__(/*! immutable */ \"./node_modules/immutable/dist/immutable.js\");\n\nvar _immutable2 = _interopRequireDefault(_immutable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar initialState = _immutable2.default.fromJS({ // initialState is cloned and is only done to be used as the default initialState if needed. It needs to be Immutable clone so it can use merge() and marge with the 'partialState' passed into the store (initStore) upon serverRender and store initialization\n    pageTitle: null,\n    hello: null,\n    contests: null,\n\n    loading: false,\n    fetching: false,\n    fetched: false,\n    error: null\n});\n\nvar mainReducer = function mainReducer() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n    var action = arguments[1];\n    // set as 'main' Reducer on 'main' branch of the store\n    switch (action.type) {\n        // fetchContests action\n        case \"FETCH_CONTESTS_PENDING\":\n            {\n                return _extends({}, state, {\n                    fetching: true\n                });\n            }\n        case \"FETCH_CONTESTS_FULFILLED\":\n            {\n                return _extends({}, state, {\n                    contests: action.payload.contests,\n\n                    fetching: false,\n                    fetched: true\n                });\n            }\n        case \"FETCH_CONTESTS_REJECTED\":\n            {\n                return _extends({}, state, {\n                    error: action.payload,\n                    fetching: false\n                });\n            }\n        // sayHello action\n        case \"SAY_HELLO\":\n            {\n                return _extends({}, state, {\n                    hello: action.payload\n                });\n            }\n    }\n\n    return state;\n};\n\n// Simple Selector                      // basic reusable selector for getting 'hello' value, in which a new state does not need to be created like in the dispatch 'main' function, and these selectors can be made complex to seriously reduce the amount of repeated code in the app\nvar helloSelector = function helloSelector(mainState) {\n    // can add 'mainState=initialState' if it is a selector that might be called on client startup\n    return mainState.hello;\n};\n\nmodule.exports = {\n    mainReducer: mainReducer,\n    helloSelector: helloSelector\n};\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(initialState, \"initialState\", \"D:/Programming/IntellijProjects/Java_Techniques/src/Other/Javascript/MERN_Stack/RoutedReduxFullStack/src/redux/reducers/mainReducer.js\");\n    reactHotLoader.register(mainReducer, \"mainReducer\", \"D:/Programming/IntellijProjects/Java_Techniques/src/Other/Javascript/MERN_Stack/RoutedReduxFullStack/src/redux/reducers/mainReducer.js\");\n    reactHotLoader.register(helloSelector, \"helloSelector\", \"D:/Programming/IntellijProjects/Java_Techniques/src/Other/Javascript/MERN_Stack/RoutedReduxFullStack/src/redux/reducers/mainReducer.js\");\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvcmVkdWNlcnMvbWFpblJlZHVjZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3JlZHV4L3JlZHVjZXJzL21haW5SZWR1Y2VyLmpzPzc3Y2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltbXV0YWJsZSBmcm9tICdpbW11dGFibGUnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0gSW1tdXRhYmxlLmZyb21KUyh7ICAgICAvLyBpbml0aWFsU3RhdGUgaXMgY2xvbmVkIGFuZCBpcyBvbmx5IGRvbmUgdG8gYmUgdXNlZCBhcyB0aGUgZGVmYXVsdCBpbml0aWFsU3RhdGUgaWYgbmVlZGVkLiBJdCBuZWVkcyB0byBiZSBJbW11dGFibGUgY2xvbmUgc28gaXQgY2FuIHVzZSBtZXJnZSgpIGFuZCBtYXJnZSB3aXRoIHRoZSAncGFydGlhbFN0YXRlJyBwYXNzZWQgaW50byB0aGUgc3RvcmUgKGluaXRTdG9yZSkgdXBvbiBzZXJ2ZXJSZW5kZXIgYW5kIHN0b3JlIGluaXRpYWxpemF0aW9uXHJcbiAgICBwYWdlVGl0bGU6IG51bGwsXHJcbiAgICBoZWxsbzogbnVsbCxcclxuICAgIGNvbnRlc3RzOiBudWxsLFxyXG5cclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgZmV0Y2hpbmc6IGZhbHNlLFxyXG4gICAgZmV0Y2hlZDogZmFsc2UsXHJcbiAgICBlcnJvcjogbnVsbCxcclxufSk7XHJcblxyXG5jb25zdCBtYWluUmVkdWNlciA9IGZ1bmN0aW9uKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHsgICAgICAvLyBzZXQgYXMgJ21haW4nIFJlZHVjZXIgb24gJ21haW4nIGJyYW5jaCBvZiB0aGUgc3RvcmVcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIC8vIGZldGNoQ29udGVzdHMgYWN0aW9uXHJcbiAgICAgICAgY2FzZSBcIkZFVENIX0NPTlRFU1RTX1BFTkRJTkdcIjoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBmZXRjaGluZzogdHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwiRkVUQ0hfQ09OVEVTVFNfRlVMRklMTEVEXCI6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNvbnRlc3RzOiBhY3Rpb24ucGF5bG9hZC5jb250ZXN0cyxcclxuXHJcbiAgICAgICAgICAgICAgICBmZXRjaGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmZXRjaGVkOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJGRVRDSF9DT05URVNUU19SRUpFQ1RFRFwiOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICBmZXRjaGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2F5SGVsbG8gYWN0aW9uXHJcbiAgICAgICAgY2FzZSBcIlNBWV9IRUxMT1wiOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGhlbGxvOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RhdGU7XHJcbn07XHJcblxyXG5cclxuLy8gU2ltcGxlIFNlbGVjdG9yICAgICAgICAgICAgICAgICAgICAgIC8vIGJhc2ljIHJldXNhYmxlIHNlbGVjdG9yIGZvciBnZXR0aW5nICdoZWxsbycgdmFsdWUsIGluIHdoaWNoIGEgbmV3IHN0YXRlIGRvZXMgbm90IG5lZWQgdG8gYmUgY3JlYXRlZCBsaWtlIGluIHRoZSBkaXNwYXRjaCAnbWFpbicgZnVuY3Rpb24sIGFuZCB0aGVzZSBzZWxlY3RvcnMgY2FuIGJlIG1hZGUgY29tcGxleCB0byBzZXJpb3VzbHkgcmVkdWNlIHRoZSBhbW91bnQgb2YgcmVwZWF0ZWQgY29kZSBpbiB0aGUgYXBwXHJcbmNvbnN0IGhlbGxvU2VsZWN0b3IgPSAobWFpblN0YXRlKSA9PiB7ICAgICAgICAvLyBjYW4gYWRkICdtYWluU3RhdGU9aW5pdGlhbFN0YXRlJyBpZiBpdCBpcyBhIHNlbGVjdG9yIHRoYXQgbWlnaHQgYmUgY2FsbGVkIG9uIGNsaWVudCBzdGFydHVwXHJcbiAgICByZXR1cm4gbWFpblN0YXRlLmhlbGxvO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBtYWluUmVkdWNlcixcclxuICAgIGhlbGxvU2VsZWN0b3IsXHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yZWR1eC9yZWR1Y2Vycy9tYWluUmVkdWNlci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUE1QkE7QUFDQTtBQThCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7O0FBcERBO0FBV0E7QUFxQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/redux/reducers/mainReducer.js\n");

/***/ })

})