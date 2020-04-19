import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import App from './components/App';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

import history from './history';

const Routes = () => {
    return (
        <Router history={history}>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" exact component={App}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/dashboard" exact component={Dashboard}/>
                </Switch>
            </div>
        </Router>
    );
};

export default Routes;