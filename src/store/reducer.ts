import { Store } from "./types"
import { ActionTypes, SEARCH_LOCATION } from "./actions"



export const searchLocationReducer= function(state:Store = {
    location:'',
}, action:ActionTypes){

    const {type, payload} = action;

    switch(type){

        case SEARCH_LOCATION:
            const givenLocation ={location:payload}
            console.log(givenLocation)
            console.log({...state,givenLocation})
            return givenLocation
        default:
            return state;
    }
}