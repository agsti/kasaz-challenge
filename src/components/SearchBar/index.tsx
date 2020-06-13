import React from "react";
import SearchBox from "./SearchBox";

import ArrowIcon from "./icons/arrow-icon.svg";

import "./SearchBar.css";


export default function SearchBar() {
    return (
        <div className="search-container">
            <SearchBox  />
            <div className="filter-btn">
                    Filtros
                <img className="filter-icon" src={ArrowIcon} />
            </div>
        </div>
    )
}
