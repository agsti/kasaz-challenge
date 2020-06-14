import { createStore, combineReducers} from 'redux';

import {FiltersReducer, FiltersInitialState} from "./Filters/reducer";
import {MenuReducer, MenusInitialState} from "./Menus/reducer";

import {ListingsReducer, ListingsInitialState} from "./Listings/reducer";

const InitialState = {
    filters: FiltersInitialState,
    menus: MenusInitialState,
    listings: ListingsInitialState
}

const reducers = combineReducers({
    filters: FiltersReducer,
    menus: MenuReducer,
    listings: ListingsReducer
})

const store = createStore(reducers, InitialState)

export type RootStateType = typeof InitialState;

export default store;
