import {ADD_LISTINGS , SET_LISTINGS} from "./actionTypes";

export type Listing = {
    title: string,
    price: number,
    priceSqm: number,
    sqm: number,
    nRooms: number,
    nBath: number,
    picture: string
}

const l = {
    title: "Piso exterior y en buen estado con ascensor en Sant Marti",
    price: 280000,
    priceSqm: 2.718,
    sqm: 103,
    nRooms: 2,
    nBath: 1,
    picture: "https://dywf8esi8sang.cloudfront.net/pictures/028b300f1420101c1af71fde6e0fa7f4_large.jpg"
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
                listings: [...state.listings, action.payload],
                nextPage: state.nextPage + 1
            })
        case SET_LISTINGS:
            return Object.assign({}, state, {
                listings: [...action.payload],
                nextPage: 1,
                scrollPosition: 0
            })
        default:
            return state;

    }

}
