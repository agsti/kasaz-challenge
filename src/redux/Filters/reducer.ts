import {
    SET_MIN_PRICE,
    SET_CITY,
    SET_MIN_ROOMS,
    SET_MAX_SIZE,
    SET_MIN_SIZE,
    SET_MAX_PRICE
} from "./actionTypes"


export const FiltersInitialState = {
    minPrice : 0 as number,
    maxPrice : 0 as number,
    minSize : 0 as number,
    maxSize : 0 as number,
    minRooms : 0 as number,
    city : "Barcelona" as string,
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
        default:
            return state;
    }

}
