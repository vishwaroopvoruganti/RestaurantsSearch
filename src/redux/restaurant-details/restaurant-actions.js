import {
    SET_Restaurants
} from './restaurant-constants';
import { createApiActions } from './restaurant-api';

export function fetchRestaurantDetails(data) {
    return {
        type: SET_Restaurants,
        Restaurants: data
    };
}


export const restautaApiActions = createApiActions(fetch);
