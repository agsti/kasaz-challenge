import React from "react";
import SearchIcon from "./icons/search-icon.svg";

type SearchInputProps = {
    onChange:  (arg0: React.ChangeEvent<HTMLInputElement>) => void,
    value: string,
    onSearch: (arg0: string) => void,
    showSearchButton: boolean
}

export default function SearchBox(props : SearchInputProps){
    const {
        onChange,
        value, 
        onSearch,
        showSearchButton
    } = props;

    return ( 
        <span className="search-box">
            <input 
            className="search-input"
            onChange = {onChange}
            value = {value}
            />
            {
            showSearchButton && <span
                className="search-icon"
            >
                <img src={SearchIcon} 
                    onClick={()=> onSearch(value)}
                />
            </span>
            }
        </span>
    )

}
