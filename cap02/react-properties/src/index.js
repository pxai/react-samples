import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const myText = 'This app rocks!';
const doIt = () => { alert('It works')}; 

ReactDOM.render(<App title='SuperApp' text={myText} fun={doIt} />, 
                            document.getElementById('root'));
registerServiceWorker();
