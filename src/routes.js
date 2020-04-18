import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import App from './components/App';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User';

import history from './history';

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/user" exact component={User}/>
            </Switch>
        </Router>
    );
};

export default Routes;