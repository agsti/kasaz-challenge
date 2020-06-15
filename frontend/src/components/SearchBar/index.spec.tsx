import React from 'react';
import 'jsdom-global/register';

import * as ReactRedux from "react-redux";
import thunk from "redux-thunk";

import { mount, ReactWrapper } from 'enzyme';
import configureStore from 'redux-mock-store';
import { describe, expect, it } from '@jest/globals';




import { Provider } from 'react-redux';

import { RootStateType } from '../../redux/store';

import SearchBar from './index';
import SearchBarView from './SearchBarView';

jest.mock("../../redux/Listings/thunks", ()=>({
    GetNewListings: jest.fn(()=>({type: "TYPE"}))
}))
jest.mock("../../redux/Filters/actions")
jest.mock("../../redux/Menus/actions")



import { GetNewListings } from "../../redux/Listings/thunks";
import { SetFilterOutOfSync } from "../../redux/Filters/actions";
import { ToggleFilterMenu } from "../../redux/Menus/actions";




describe('FilterMenu', () => {
    let store;
    let component : ReactWrapper;
    let mockStore;

    const state : Partial<RootStateType> = {
        filters: {
            minPrice: 10,
            maxPrice: 20,
            city: "city",
            minSize: 30,
            maxSize: 40,
            minRooms:3,
            outOfSync: true
        },
        menus: {
            showFilterMenu: true
        }
    }

    beforeEach(() => {
        mockStore = configureStore([thunk]);

        store = mockStore(state);
        
        component = mount(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        );
    });


    it('should render correctly', () => {
        expect(component).toMatchSnapshot()
    })

    it('should pass correct properties to view', () =>{
        const view = component.find(SearchBarView)
        
        expect(view.prop("filterArrowLookingUp")).toBe(state.menus.showFilterMenu)
        expect(view.prop("searchHasChanged")).toBe(state.filters.outOfSync)
        expect(view.prop("searchValue")).toBe(state.filters.city)

    })

    // it('onSearch should dispatch correct actions', () =>{
  

    //     const mockDispatch = jest.fn()
    //     jest.mock("react-redux", ()=>({
    //         useDispatch: mockDispatch
    //     }))

    //     const view = component.find(SearchBarView)
        
    //     const ret = view.invoke('onSearch')("search-data")
    //     expect(GetNewListings).toBeCalledTimes(1)
    // })
})
