const { combineReducers } = require('redux');

const { mainReducer, helloSelector } = require('./mainReducer');

const reducers = combineReducers({
    main: mainReducer,
});

// Selectors                                             // place all selectors here so they are centralized
const selectHello = (state) => helloSelector(state.main);     // forwards the selectHello to the right branch/reducer in our store and forwards the selector for 'hello' to 'mainReducer' where 'store.getState().main.hello' will be returned


module.exports = {
    reducers,
    selectHello,
};