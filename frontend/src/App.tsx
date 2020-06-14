import React, { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { hot } from "react-hot-loader/root";

import HeaderBar from "./components/HeaderBar";
import SearchBar from "./components/SearchBar";
import FilterView from "./components/FilterMenu";
import ListingsList from "./components/ListingsList";

import { SelectListingsState } from "./redux/Listings/selectors";

import "./App.css";
import 'reset-css';
import { GetNewListings } from "./redux/Listings/thunks";


const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetNewListings())
    }, [])


    const listingsState = useSelector(SelectListingsState)    

    return(
        <div className="App">
            <HeaderBar />
            <SearchBar />
            <div className="main-container">
               <FilterView />
                <ListingsList
                    listings = {listingsState.listings}
                />
	        </div>

        </div>
    );
}

export default hot(App);
