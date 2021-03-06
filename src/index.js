import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter
} from 'react-router-dom';
import Router from './components/Router';
import * as serviceWorker from './serviceWorker';
import 'normalize.css';
import './styles/style.css';

ReactDOM.render(
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
