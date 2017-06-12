import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {Router, Route, browserHistory} from 'react-router';

import Apod from "./components/Apod.js";


ReactDOM.render(
    <Router history = {browserHistory}>
        <Route path = "/" component = {App} />
        <Route path = "/apod" component = {Apod} />
    </Router>, document.getElementById("root")
);