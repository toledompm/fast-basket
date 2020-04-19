import React from 'react';
import {Router, Route, Switch, Link} from 'react-router-dom';

import App from './components/App';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Store from './components/Store';
import StoreCreate from './components/Store/create';
import StoreEdit from './components/Store/edit';
import Product from './components/Product';
import ProductCreate from './components/Product/create';
import ProductEdit from './components/Product/edit';
import Catalog from './components/Catalog';

import history from './history';
import Help from './components/Help';
import Auth from './components/Auth';

class Routes extends React.Component {
    state = {
        path: "/"
    }

    componentDidMount() {
        this.setState({path: history.location.pathname})
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={App}/>
                        <Route path="/help" exact component={Help}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/auth" exact component={Auth}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/dashboard" exact component={Dashboard}/>
                        <Route path="/store/new" exact component={StoreCreate}/>
                        <Route path="/store/edit/:id" exact component={StoreCreate}/>
                        <Route path="/product/new" exact component={ProductCreate}/>
                        <Route path="/product/edit/:id" exact component={ProductCreate}/>
                        <Route path="/store/:id" exact component={Store}/>
                        <Route path="/product/:id" exact component={Product}/>
                        <Route path="/catalog/:id" exact component={Catalog}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default Routes;