import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

var Header = require('./components/layout/Header');
var Main = require('./components/layout/Main');
var Footer = require('./components/layout/Footer');


// !!!!!!!! IMPORTANT !!!!!!!!!!!!!!!
/* The Store cannot be connected to with 'connect' unless the Component is
   wrapped around a 'Route' component otherwise the navigation will not work and the history.location will not be pushed correctly
*/

class App extends React.Component {

    render() {
        return (
            <div class="container">
                <Route path='*'
                       render={(props) => {
                           return <Header {...props} />
                       }}
                />

                <Main />

                <Footer />
            </div>
        );
    }
}

App.propTypes = {

};

module.exports = App;

