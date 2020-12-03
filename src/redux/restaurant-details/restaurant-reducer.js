import { SET_Restaurants } from './restaurant-constants'

const initialState = {
    selectedRestauernt: null,
    Restaurants: null
};

export  function fetchRestaurantData(state = initialState, action) {
    console.log("enter reducer", action);
    switch(action.type) {  
        case SET_Restaurants:
            console.log("enter case", action.Restaurants)
            return{
                ...state,
                Restaurants: 
                    action.Restaurants.sort((a,b) => {
                        let restNameA = a.name.toUpperCase();
                        let restNameB = b.name.toUpperCase();

                        if(restNameA<restNameB)
                            return -1
                        if(restNameA>restNameB)
                            return 1
                        return 0
                    })
            }

        default:
            return state
    }
};

