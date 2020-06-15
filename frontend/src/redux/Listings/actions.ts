import { Listing } from "./reducer";
import { SET_SCROLL_POSITION, ADD_LISTINGS, SET_LISTINGS } from "./actionTypes";

export const AddListings = (listings : Listing[]) => ({type: ADD_LISTINGS, payload: listings})

export const SetListings = (listings : Listing[]) => ({type: SET_LISTINGS, payload: listings})

export const SetScrollPosition = (scroll : number) => ({type: SET_SCROLL_POSITION, payload: scroll})