import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import App from './App.jsx';

// axios.defaults.baseURL = 'http://47.106.218.69:8000/'
axios.defaults.baseURL = 'http://localhost:8000/'

ReactDOM.render(
    <App></App>,
    document.getElementById('root')
)