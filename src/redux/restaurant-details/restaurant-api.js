import { fetchRestaurantDetails } from './restaurant-actions';
import { RESTAURANT_FETCH_URL } from '../../constants/apiUrl';

export function createApiActions(fetch) {
    return {
        fetchRestaurantServiceDetails() {
            return async dispatch => {
                const response = await fetch(RESTAURANT_FETCH_URL, { 
                    headers: { 
                        Authorization: 'Api-Key q3MNxtfep8Gt', 
                    }, 
                });
                if (response.status === 200) {
                    dispatch(fetchRestaurantDetails(await response.json()));
                }
            };
        },
    };
}
