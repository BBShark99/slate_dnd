import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import { Provider } from 'react-redux';
import store from './redux/store';

/**
 * Import All Views
 */
import Home from './views/Home';

/**
 * Import Styles
 */
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}