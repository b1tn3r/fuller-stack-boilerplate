var React = require('react');
var { connect } = require('react-redux');
var { push } = require('react-router-redux');
import Helmet from 'react-helmet';              // 'react-helmet' needs to be imported with 'import' and not with 'require' for some reason

var { sayHello } = require('../../redux/actions/mainActions');

import { sendHelloMsgToServer } from '../../socket';


// State to Props function          // if not a decorator it would be  module.exports = connect(stateToPropsFunc)(HelloButton)
@connect(state => {         // the 'store' is the state or 'store.getState()' of 'store' from client.js
    return {
        currentState: state,                 // gives the whole store's current 'state' including the 'main' branch and our 'router' branch we added with routerReducer and remotely control with our ConnectedRouter wrapper. The 'router' branch will always contain a 'location' property that says the current pathname, and other values like 'hash' and 'search' params (extensions on our url), state, and key
        hello: state.main.hello,            // the server rendering passes the 'hello' String into the App as the initial value of 'Starting Message', but then the socket.io on the server sends the client a message that the store dispatches the sayHello() action to pass the serverMessage as the payload for the sayHello() action which changes this String to whatever the server sent the client over its socket with it, but then when we press the 'Say Hello' button on this page, it will change the payload again to the pre-defined String 'Hello!' that is defined here upon dispatching the action
    }
})
class HelloButton extends React.Component {
    handleClick() {
        sendHelloMsgToServer(this.props.currentState);          // sends the current 'hello' String from the store to the server with our socket.io connection (before the sayHello() action changes it)

        this.props.dispatch(sayHello("Hello!"));        // sends "Hello!" as payload for action to change <h5> element text

        console.log(this.props.currentState);        // shows just the values we have in our store's current state
        console.log(this.props);                // shows all the props passed down from the ConnectedRouter like history, location, match, staticContext (which could be set by defining a 'context' for our StaticRouter), and then any values we set in our 'connect()' decorator like 'hello' and 'store'

        //this.props.history.push('/');             // can push new route location with the 'history' prop from our ConnectedRouter and then use history's push() function to push a new path to go there
        //this.props.dispatch(push('/about'));      // another way to push a new our App to a new route/location would be to make a react-router-redux 'push()' action to our store, which will have it communicate with the routerReducer branch of our store, and we pass in the url '/about' as the payload for the action, which the routerReducer will use to change the location property in the store, and since we are using 'react-router-redux', our Router  functionality like 'history', 'location', and 'match' (in our this.props) are actually controlled by our redux store (or that's at least where the central data is located and binded with), and this way we can change data in our store with certain actions, which will, in turn, change our App's Router locations and such.

    }

    render() {
        return (
            <div>
                <Helmet title={"Hello Button"} />

                <h5>Hello Button Page</h5>
                <hr/>
                <h5>{this.props.hello}</h5>

                <button class="btn btn-secondary"
                        onClick={this.handleClick.bind(this)}>
                    Say Hello
                </button>
            </div>
        )
    }
}

module.exports = HelloButton;