import {TOGGLE_FILTER_MENU} from "./actionTypes";

export const MenusInitialState = {
    showFilterMenu : false as boolean
}

type MenuStateType = typeof MenusInitialState;

export const MenuReducer = (state: MenuStateType = MenusInitialState, action: any) : MenuStateType => {
    switch(action.type) {
        case TOGGLE_FILTER_MENU:
            return Object.assign({}, state, {
                showFilterMenu: !state.showFilterMenu
            })
        default:
            return state;

    }

}
