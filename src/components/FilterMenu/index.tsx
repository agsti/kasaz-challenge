import React from "react";
import FilterMenuView, {OptionsValue} from "./FilterView";
import { useSelector, useDispatch } from "react-redux";

import { SelectFilterState } from "../../redux/Filters/selectors";
import * as FilterActions from "../../redux/Filters/actions";

import {ToggleFilterMenu} from "../../redux/Menus/actions";
import {SelectMenuState} from "../../redux/Menus/selectors";

const MapValueToOptions = (sufix:string, overrides?:{ [key:number]:string; }) => 
            (v:number ) : OptionsValue => ({value:v, label: overrides && v in overrides ? overrides[v]:`${v}${sufix}`})


const FindOption = (value:number, options:OptionsValue[]) => options.find(o => o.value===value) 

const FilterPrices = [
    0,
    100000,
    150000,
    200000,
    400000,
    500000,
].map(MapValueToOptions("€", {0:"Sin Limite"}))


const FilterNRooms = [
    0,
    1,
    2,
    3,
    4,
    5,
].map(MapValueToOptions("+", {0:"TODAS"}))

const FilterSizes = [
    0,
    20,
    30,
    40,
    50,
    60,
    70,
    80,
    90,
].map(MapValueToOptions(" m²"))


export default function FilterMenu(){
    const filterData = useSelector(SelectFilterState);
    const menuData = useSelector(SelectMenuState);
    const dispatch = useDispatch();

    let filterValues= {
        minPrice: FindOption(filterData.minPrice, FilterPrices), 
        maxPrice: FindOption(filterData.maxPrice, FilterPrices),
        minSizeSqm: FindOption(filterData.minSize, FilterSizes),
        maxSizeSqm: FindOption(filterData.maxSize, FilterSizes),
        minRooms: FindOption(filterData.minRooms, FilterNRooms),
    }


    let callbacks = {
        minPrice: (v : number) =>{
            dispatch(FilterActions.SetMinPrice(v))
            !filterData.outOfSync && dispatch(FilterActions.SetFilterOufOfSync(true))
        }, 
		maxPrice: (v : number) =>{
            dispatch(FilterActions.SetMaxPrice(v))
            !filterData.outOfSync && dispatch(FilterActions.SetFilterOufOfSync(true))
        },
		minSizeSqm: (v : number) =>{
            dispatch(FilterActions.SetMinSize(v))
            !filterData.outOfSync && dispatch(FilterActions.SetFilterOufOfSync(true))
        },
		maxSizeSqm: (v : number) =>{
            dispatch(FilterActions.SetMaxSize(v))
            !filterData.outOfSync && dispatch(FilterActions.SetFilterOufOfSync(true))
        },
		minRooms: (v : number) =>{
            dispatch(FilterActions.SetMinRooms(v))
            !filterData.outOfSync && dispatch(FilterActions.SetFilterOufOfSync(true))
        },
    }

    const onClickSeeListings = () => {
        console.log(filterData)
        dispatch(FilterActions.SetFilterOufOfSync(false))
        dispatch(ToggleFilterMenu())
    }

    return <FilterMenuView
        visible={menuData.showFilterMenu}
        prices={FilterPrices}
        nRooms={FilterNRooms}
        sizes={FilterSizes}
        enableSeeListings={filterData.outOfSync}
        filterValues={filterValues}
        callbacks={callbacks}
        onClickSeeListings={onClickSeeListings}
   />

}
