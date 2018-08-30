// Startup point for client side application

//var  React = require('react');
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes'


ReactDOM.hydrate(<BrowserRouter><Routes/></BrowserRouter>, document.querySelector('#root'));
