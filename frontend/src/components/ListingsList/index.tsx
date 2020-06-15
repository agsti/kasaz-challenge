import React, { useState } from "react";

import ListingsListView from "./ListingsListView";
import { useSelector, useDispatch } from "react-redux";
import { SelectListingsState } from "../../redux/Listings/selectors";

import { GetMoreListings } from "../../redux/Listings/thunks";

export default function ListingsList(){

    const dispatch = useDispatch()
    const listingsState = useSelector(SelectListingsState)
    // const [scrollPosition, setScrollPosition] = useState(0)
    return (
        <ListingsListView
        listings = {listingsState.listings}
        scrollPosition={listingsState.scrollPosition}
        onScroll={(scrollPos, isEnd) => {
            if (isEnd){
                dispatch(GetMoreListings())
            }
        }}
    />
     )
}
