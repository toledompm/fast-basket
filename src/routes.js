import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import App from './components/App';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Store from './components/Store';
import Product from './components/Product';
import Catalog from './components/Catalog';

import history from './history';
import Help from './components/Help';
import { Auth } from './components/Auth';

const Routes = () => {
    return (
        <Router history={history}>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" exact component={App}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/auth" exact component={Auth}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/dashboard" exact component={Dashboard}/>
                    <Route path="/store/:id" exact component={Store}/>
                    <Route path="/product/:id" exact component={Product}/>
                    <Route path="/catalog/:id" exact component={Catalog}/>
                    <Route path="/help" exact component={Help}/>
                </Switch>
            </div>
        </Router>
    );
};

export default Routes;