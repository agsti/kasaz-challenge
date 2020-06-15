import React, {useState} from "react";
import FilterMenuView, {OptionsValue} from "./FilterView";
import { useSelector, useDispatch } from "react-redux";

import * as FilterActions from "../../redux/Filters/actions";

import {ToggleFilterMenu} from "../../redux/Menus/actions";
import {SelectMenuState} from "../../redux/Menus/selectors";
import { GetNewListings } from "../../redux/Listings/thunks";
import { SetScrollPosition } from "../../redux/Listings/actions";
import {isSizesOk, isPricesOk} from "./validations";
import {SelectFilterState} from "../../redux/Filters/selectors";

const MapValueToOptions = (sufix:string, overrides?:{ [key:string]:string; }) => 
            (v:any ) : OptionsValue => ({value:v, label: overrides && v in overrides ? overrides[v] :`${v.toLocaleString()}${sufix}`})


const FindOption = (value:number, options:OptionsValue[]) => options.find(o => o.value===value) 

const FilterPrices = [
    "",
    0,
    100000,
    150000,
    200000,
    400000,
    500000,
].map(MapValueToOptions("€", {"": "Sin limite"}))


const FilterNRooms = [
    0,
    1,
    2,
    3,
    4,
    5,
].map(MapValueToOptions("+", {0:"TODAS"}))

const FilterSizes = [
    "",
    20,
    30,
    40,
    50,
    60,
    70,
    80,
    90,
].map(MapValueToOptions(" m²", {"": "Sin limite"}))


export default function FilterMenu(){
    const [minPrice, setMinPrice] = useState(null)
    const [maxPrice, setMaxPrice] = useState(null as number)
    const [minSize, setMinSize] = useState(null as number)
    const [maxSize, setMaxSize] = useState(null as number)
    const [minRooms, setMinRooms] = useState(0 as number)

    const menuData = useSelector(SelectMenuState);
    const filterData = useSelector(SelectFilterState);
    const dispatch = useDispatch();

    const filterValues= {
        minPrice: FindOption(minPrice, FilterPrices), 
        maxPrice: FindOption(maxPrice, FilterPrices),
        minSizeSqm: FindOption(minSize, FilterSizes),
        maxSizeSqm: FindOption(maxSize, FilterSizes),
        minRooms: FindOption(minRooms, FilterNRooms),
    }


    const callbacks = {
        minPrice: (v : number) =>{
            setMinPrice(v)
            !filterData.outOfSync && dispatch(FilterActions.SetFilterOutOfSync(true))
        }, 
		maxPrice: (v : number) =>{
            setMaxPrice(v)
            !filterData.outOfSync && dispatch(FilterActions.SetFilterOutOfSync(true))
        },
		minSizeSqm: (v : number) =>{
            setMinSize(v)
            !filterData.outOfSync && dispatch(FilterActions.SetFilterOutOfSync(true))
        },
		maxSizeSqm: (v : number) =>{
            setMaxSize(v)
            !filterData.outOfSync && dispatch(FilterActions.SetFilterOutOfSync(true))
        },
		minRooms: (v : number) =>{
            setMinRooms(v)
            !filterData.outOfSync && dispatch(FilterActions.SetFilterOutOfSync(true))
        },
    }

    const onClickSeeListings = () => {
        dispatch(FilterActions.SetFilterOutOfSync(false))

        dispatch(SetScrollPosition(0))
        dispatch(ToggleFilterMenu())

        dispatch(FilterActions.SetMinPrice(minPrice))
        dispatch(FilterActions.SetMaxPrice(maxPrice))

        dispatch(FilterActions.SetMinSize(minSize))
        dispatch(FilterActions.SetMaxSize(maxSize))
        dispatch(FilterActions.SetMinRooms(minRooms))

        dispatch(GetNewListings())
    }

    const pricesErr = !isPricesOk(minPrice, maxPrice)
    const sizesErr = !isSizesOk(minSize, maxSize)
    return <FilterMenuView
        visible={menuData.showFilterMenu}
        prices={FilterPrices}
        nRooms={FilterNRooms}
        sizes={FilterSizes}

        enableSeeListings={filterData.outOfSync}
        filterValues={filterValues}
        callbacks={callbacks}
        onClickSeeListings={onClickSeeListings}
        validation={{pricesErr, sizesErr}}
   />

}
