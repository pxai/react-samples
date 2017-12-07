import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

ReactDOM.render(<Provider store={store}>
                    <Router>
                        <App />
                        </Router>
                </Provider>, document.getElementById('root'));
registerServiceWorker();
