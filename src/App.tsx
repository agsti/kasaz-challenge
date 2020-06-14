import React from "react";
import {useSelector} from "react-redux";
import { hot } from "react-hot-loader/root";

import HeaderBar from "./components/HeaderBar";
import SearchBar from "./components/SearchBar";
import FilterView from "./components/FilterMenu";
import ListingsList from "./components/ListingsList";

import {SelectMenuState} from "./redux/Menus/selectors";
import { SelectListingsState } from "./redux/Listings/selectors";

import "./App.css";
import 'reset-css';


const App = () => {
    const menuState = useSelector(SelectMenuState)    
    const listingsState = useSelector(SelectListingsState)    

    return(
        <div className="App">
            <HeaderBar />
            <SearchBar />
        { 
            menuState.showFilterMenu && <FilterView 
             />
        }
			<ListingsList
				listings = {listingsState.listings}
				/>
	

        </div>
    );
}

export default hot(App);
