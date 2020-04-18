import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';

import Routes from './routes';
import reducers from './reducers';

import './global.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store={store}>
    <Routes/>
</Provider>, document.querySelector('#root'));