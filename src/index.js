import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';

const clientRender = () => {
    ReactDOM.render(
        <BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
};

const serverRender = () => {};

if (typeof window === 'object') {
    clientRender();
} else {
    serverRender();
};
