import Immutable from 'immutable';

const initialState = Immutable.fromJS({     // initialState is cloned and is only done to be used as the default initialState if needed. It needs to be Immutable clone so it can use merge() and marge with the 'partialState' passed into the store (initStore) upon serverRender and store initialization
    pageTitle: null,
    hello: null,
    contests: null,

    loading: false,
    fetching: false,
    fetched: false,
    error: null,
});

const mainReducer = function(state = initialState, action) {      // set as 'main' Reducer on 'main' branch of the store
    switch(action.type) {
        // fetchContests action
        case "FETCH_CONTESTS_PENDING": {
            return {
                ...state,
                fetching: true
            };
        }
        case "FETCH_CONTESTS_FULFILLED": {
            return {...state,
                contests: action.payload.contests,

                fetching: false,
                fetched: true,
            }
        }
        case "FETCH_CONTESTS_REJECTED": {
            return {...state,
                error: action.payload,
                fetching: false,
            }
        }
        // sayHello action
        case "SAY_HELLO": {
            return {
                ...state,
                hello: action.payload,
            }
        }
    }

    return state;
};


// Simple Selector                      // basic reusable selector for getting 'hello' value, in which a new state does not need to be created like in the dispatch 'main' function, and these selectors can be made complex to seriously reduce the amount of repeated code in the app
const helloSelector = (mainState) => {        // can add 'mainState=initialState' if it is a selector that might be called on client startup
    return mainState.hello;
};

module.exports = {
    mainReducer,
    helloSelector,
};