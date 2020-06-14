import React, {useState} from "react";
import SearchBox from "./SearchBox";

import ArrowIcon from "./icons/arrow-icon.svg";

import "./SearchBar.css";

type SearchBarProps = {
    onSearch: (arg0: string) => void,
    searchValue: string,
    setSearchValue: (arg0: string) => void,
    searchHasChanged: boolean,
    onFilterButtonClicked: ()=>void,
    filterArrowLookingUp: boolean
}
export default function SearchBarView(props:SearchBarProps) {
    const {
        onSearch,
        setSearchValue, 
        searchValue,
        searchHasChanged,
        onFilterButtonClicked, 
        filterArrowLookingUp
    } = props

    return (
        <div className="search-container">
            <SearchBox
                onChange={(e) => {setSearchValue(e.target.value)}}
                value={searchValue}
                onSearch={onSearch}
                showSearchButton={searchHasChanged}
            />
            <div className="filter-btn" onClick={()=> onFilterButtonClicked()}>
                Filtros
                <img className={filterArrowLookingUp? "filter-icon filter-menu-shown" : "filter-icon"} src={ArrowIcon} />
            </div>
        </div>
    )
}
