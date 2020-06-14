import React from "react";
import {useSelector} from "react-redux";
import { hot } from "react-hot-loader/root";

import HeaderBar from "./components/HeaderBar";
import SearchBar from "./components/SearchBar";
import FilterView from "./components/FilterMenu";
import ListingsList from "./components/ListingsList";

import {SelectMenuState} from "./redux/Menus/selectors";

import "./App.css";
import 'reset-css';

const l = {
    title: "Piso exterior y en buen estado con ascensor en Sant Marti",
    price: 280000,
    priceSqm: 2.718,
    sqm: 103,
    nRooms: 2,
    nBath: 1,
    picture: "https://dywf8esi8sang.cloudfront.net/pictures/028b300f1420101c1af71fde6e0fa7f4_large.jpg"
}

const App = () => {
    const menuState = useSelector(SelectMenuState)    

    return(
        <div className="App">
            <HeaderBar />
            <SearchBar />
        { 
            menuState.showFilterMenu && <FilterView 
             />
        }
			<ListingsList
				listings = {[l, l, l]}
				/>
	

        </div>
    );
}

export default hot(App);
