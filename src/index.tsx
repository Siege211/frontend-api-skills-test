import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import App from './App'
import Recipes from "./Recipes";
import './styles/styles.css'

ReactDOM.render(
    <Router>
    <App/>
    </Router>,
    document.getElementById("root")
);