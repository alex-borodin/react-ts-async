import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { apply_showseconds } from "./AppReducer";
import { AppState } from "./AppState";

import './index.css';
import AppCont from './AppCont';
import * as serviceWorker from './serviceWorker';

const store = createStore<AppState, any, any, any>(apply_showseconds, {
    seconds: 0
}, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}><AppCont /></Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
