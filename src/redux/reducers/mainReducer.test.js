import {
    sayHello,
} from '../actions/mainActions'

import mainReducer from './mainReducer'

let mainState;

beforeEach(() => {
    let initialState = mainReducer(undefined, {});    // before every test, it restores the mainState as the mainReducer's initialState passed back from the first call to it when the 'state' 1st arg is 'undefined' reverting to use the default 'initialState' and with no action {} called either, it just passes back the default initialState to restore as 'mainState'
    mainState = initialState.toJS();                    // converts the initialState Immutable object into a JS object just as we do in our 'store.js' when the store is created and merged, and this way our data is consistent across the initialState's default variables and the mainState variables set by an action and its payload
});

test('handle default', () => {                  // tests the default first call of mainReducer() that returns the default state 'initialState' which is comprised of starting values including a lot of null values
    expect(mainState.hello).toBe(null);
    expect(mainState.pageTitle).toBe(null);
    expect(mainState.contests).toBe(null);      // these are all the starting values of the initialState in our 'mainReducer'
    expect(mainState.loading).toBe(false);
});


test('handle sayHello', () => {                                 // this time the 'sayHello()' action is tested against the mainReducer logic specifically the switch case where our sayHello action triggers the 'SAY_HELLO' action.type case in our reducer and we will test the resulting mainState.hello variable to our expected payload of "Hello Test"
    mainState = mainReducer(mainState, sayHello("Hello Test"));
    expect(mainState.hello).toBe("Hello Test");
    expect(mainState.pageTitle).toBe(null);
    expect(mainState.contests).toBe(null);      // the rest of these state values are not changed from the 'sayHello' action but can be tested against with other actions
    expect(mainState.loading).toBe(false);
});