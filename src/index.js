import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {Router, Route, browserHistory} from 'react-router';

import Apod from "./components/Apod.js";
import MarsRover from "./components/MarsRover";
import Search from "./components/Search";


ReactDOM.render(
    <Router history = {browserHistory}>
        <Route path = "/" component = {App} />
        <Route path = "/apod" component = {Apod} />
        <Route path = "/marsRover" component = {MarsRover} />
        <Route path = "/search" component = {Search} />
    </Router>, document.getElementById("root")
);