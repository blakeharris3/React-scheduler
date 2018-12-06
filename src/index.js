import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import Auth from './Auth'


const auth = new Auth()

let state = {};
window.setState = (changes) => {
    state = Object.assign({}, state, changes)
    
    ReactDOM.render(<App {...state}/>,document.getElementById('root'));
    
    }

/* eslint no-restricted-globals: 0*/
let username = auth.getProfile().given_name || "Unknown User"
let initialState = {
    name: username,
    location: location.pathname,
    auth
}
window.setState(initialState);
      

  


