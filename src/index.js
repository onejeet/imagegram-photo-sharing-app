import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import Reducer from './Reducers';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const initialState = {
    currentUser: {},
    users:[],
    posts:[],
    allComments:[],
    sorting:'timestamp',
}

const store = createStore(Reducer, initialState);

function render(){
    ReactDOM.render(<BrowserRouter><App store={store} /></BrowserRouter>, document.getElementById('root'));
}


store.subscribe(render);
render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
