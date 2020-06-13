import { createStore, combineReducers} from 'redux';

import {FiltersReducer, FiltersInitialState} from "./Filters/reducer";
import {MenuReducer, MenusInitialState} from "./Menus/reducer";

const InitialState = {
    filters: FiltersInitialState,
    menus: MenusInitialState
}

const reducers = combineReducers({
    filters: FiltersReducer,
    menus: MenuReducer
})

const store = createStore(reducers, InitialState)

export type RootStateType = typeof InitialState;

export default store;
