import React from "react";
import SearchBarView from "./SearchBarView";
import {useSelector, useDispatch} from "react-redux";
import {SelectMenuState} from "../../redux/Menus/selectors";
import {SetCity, SetFilterOufOfSync} from "../../redux/Filters/actions";
import {ToggleFilterMenu} from "../../redux/Menus/actions";
import { SelectFilterState } from "../../redux/Filters/selectors";


export default function SearchBar() {
    const menuState = useSelector(SelectMenuState);
    const filterState = useSelector(SelectFilterState);
    const dispatch = useDispatch();

    return (
        <SearchBarView
            onSearch={search => {
                console.log("API CALL AND ALL THAT")
            }}
            onFilterButtonClicked={ () =>{
                dispatch(ToggleFilterMenu())
            }}
            filterArrowLookingUp={menuState.showFilterMenu}
            searchHasChanged={filterState.outOfSync}
            searchValue={filterState.city}
            setSearchValue={v => {
                dispatch(SetCity(v))
                !filterState.outOfSync && dispatch(SetFilterOufOfSync(true))
            }
            }
    />
    )
}
