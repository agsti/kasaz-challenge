import React, { Component} from "react";
import { hot } from "react-hot-loader/root";
import HeaderBar from "./components/HeaderBar";
import SearchBar from "./components/SearchBar";
import FilterView from "./components/FilterView";

import "./App.css";
import 'reset-css';

class App extends Component{
  render(){
    return(
        <div className="App">
            <HeaderBar />
            <SearchBar />
            <FilterView 
                nRooms={["1+", "2+", "3+", "4+", "5+"]}
                prices={["1","2","3","4"]}
                propSizes={["30", "40", "50"]}

                    
                    />
        </div>
    );
  }
}

export default hot(App);
