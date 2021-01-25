import {createStore} from 'redux';
import {applyMiddleware} from 'redux';// import middleware here

// import logger here.. in complex project it will help to find out errors.
// logger function will take us through the from initial value to updated value..how states are changing.
import logger from 'redux-logger';
import bookReducer from './book/bookReducer';

// create store. // we have to pass applyMiddleware as a second paramter to store.
// inside middleware function we will pass logger 

const store = createStore(bookReducer, applyMiddleware(logger));  

export default store;
