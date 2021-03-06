import {
    SET_MIN_PRICE,
    SET_CITY,
    SET_MIN_ROOMS,
    SET_MAX_SIZE,
    SET_MIN_SIZE,
    SET_MAX_PRICE,
    SET_FILTERS_OUT_OF_SYNC
} from "./actionTypes"


export const FiltersInitialState = {
    minPrice : null as number,
    maxPrice : null as number,
    minSize : null as number,
    maxSize : null as number,
    minRooms : 0 as number,
    city : "Barcelona" as string,
    outOfSync : false as boolean,
}

type FilterStateType = typeof FiltersInitialState;

export const FiltersReducer =  (state:FilterStateType = FiltersInitialState, action : any) : FilterStateType => {
    console.log("REDUCER!", state, action)
    switch (action.type) {
        case SET_MIN_PRICE:
            return Object.assign({}, state, {
                minPrice: action.payload
            })
        case SET_MAX_PRICE:
            return Object.assign({}, state, {
                maxPrice: action.payload
            })
        case SET_MIN_SIZE:
            return Object.assign({}, state, {
                minSize: action.payload
            })
        case SET_MAX_SIZE:
            return Object.assign({}, state, {
                maxSize: action.payload
            })
        case SET_MIN_ROOMS:
            return Object.assign({}, state, {
                minRooms: action.payload
            })
        case SET_CITY:
            return Object.assign({}, state, {
                city: action.payload
            })
        case SET_FILTERS_OUT_OF_SYNC:
            return Object.assign({}, state, {
                outOfSync: action.payload
            })
        default:
            return state;
    }

}
