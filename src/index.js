import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './redux/index';
import thunk from 'redux-thunk';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './assets/scss/main.scss';
const store = createStore(rootReducer,applyMiddleware(thunk)); //gọi ajax trong action

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();