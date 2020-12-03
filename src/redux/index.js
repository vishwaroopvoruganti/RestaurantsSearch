import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { fetchRestaurantData } from './restaurant-details/restaurant-reducer';
//import logger from 'redux-logger';

export const configureStore = () => {
    return createStore(
        combineReducers({ fetchRestaurantData }),
        compose(applyMiddleware(thunk))
    );
};
