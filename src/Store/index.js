import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducers } from './Reducers';
import thunk from 'redux-thunk';

const initialState = {};
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, initialState, 
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);

export default store;