import {ADD_LISTINGS , SET_LISTINGS, SET_SCROLL_POSITION} from "./actionTypes";

export type Listing = {
    title: string,
    price: number,
    priceSqm: number,
    sqm: number,
    nRooms: number,
    nBath: number,
    picture: string
}

export const ListingsInitialState = {
    listings : [] as Listing[],
    nextPage: 0 as number,
    scrollPosition: 0 as number
}

type ListingsStateType = typeof ListingsInitialState;

export const ListingsReducer = (state: ListingsStateType = ListingsInitialState, action: any) : ListingsStateType => {
    switch(action.type) {
        case ADD_LISTINGS:
            return Object.assign({}, state, {
                listings: [...state.listings, ...action.payload],
                nextPage: state.nextPage + 1
            })
        case SET_LISTINGS:
            return Object.assign({}, state, {
                listings: [...action.payload],
                nextPage: 1,
                scrollPosition: 0
            })
        case SET_SCROLL_POSITION:
            return Object.assign({}, state, {
                scrollPosition: action.payload
            })
        default:
            return state;

    }

}
