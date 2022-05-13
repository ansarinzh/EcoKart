import {createStore, combineReducers, applyMiddleware } from 'redux';
import ThunkMiddleware  from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { CartReducer } from './Reducer/CartReducer';

const reducer = combineReducers({
    CartReducer: CartReducer
})

const store = createStore(
    reducer, composeWithDevTools(applyMiddleware(ThunkMiddleware))
)


export default store;