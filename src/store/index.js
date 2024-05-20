import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import productReducer from './productReducer'; // Ensure this import is correct

const rootReducer = combineReducers({
  product: productReducer // Ensure reducer is correctly set up
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
