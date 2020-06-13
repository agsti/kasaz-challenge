import React, {useState} from "react";
import SearchBox from "./SearchBox";

import ArrowIcon from "./icons/arrow-icon.svg";

import "./SearchBar.css";

type SearchBarProps = {
    onSearch: (arg0: string) => void,
    onFilterButtonClicked: ()=>void,
    filterMenushown: boolean
}
export default function SearchBarView(props:SearchBarProps) {
    const {onSearch, onFilterButtonClicked, filterMenushown} = props
    const [searchValue, setSearchValue] = useState("");
    return (
        <div className="search-container">
            <SearchBox
                onChange={(e) => {setSearchValue(e.target.value)}}
                value={searchValue}
                onSearch={onSearch}
            />
            <div className="filter-btn" onClick={()=> onFilterButtonClicked()}>
                Filtros
                <img className={filterMenushown? "filter-icon filter-menu-shown" : "filter-icon"} src={ArrowIcon} />
            </div>
        </div>
    )
}
