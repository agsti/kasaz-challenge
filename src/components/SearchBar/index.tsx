import React from "react";
import SearchBarView from "./SearchBarView";
import {useSelector, useDispatch} from "react-redux";
import {SelectMenuState} from "../../redux/Menus/selectors";
import {SetCity} from "../../redux/Filters/actions";
import {ToggleFilterMenu} from "../../redux/Menus/actions";


export default function SearchBar() {
    const menuState = useSelector(SelectMenuState);
    const dispatch = useDispatch();

    return (
        <SearchBarView
            onSearch={search => {
                dispatch(SetCity(search))
            }}
            onFilterButtonClicked={ () =>{
                dispatch(ToggleFilterMenu())
            }}
            filterMenushown={menuState.showFilterMenu}
    />
    )
}
