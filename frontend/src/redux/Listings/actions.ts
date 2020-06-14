import { Listing } from "./reducer";

export const ADD_LISTINGS = "ADD_LISTINGS";
export const SET_LISTINGS = "SET_LISTINGS";


export const AddListings = (listings : Listing[]) => ({type: ADD_LISTINGS, payload: listings})

export const SetListings = (listings : Listing[]) => ({type: SET_LISTINGS, payload: listings})