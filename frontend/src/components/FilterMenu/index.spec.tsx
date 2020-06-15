import React from 'react';
import 'jsdom-global/register';
import { mount, ReactWrapper } from 'enzyme';
import configureStore from 'redux-mock-store';
import { describe, expect, it } from '@jest/globals';
import { Provider } from 'react-redux';

import FilterMenu from './index';
import { RootStateType } from '../../redux/store';
import FilterView from './FilterView';

const mockStore = configureStore([]);

describe('FilterMenu', () => {
    let store;
    let component : ReactWrapper;

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
        
        store = mockStore(state);

        component = mount(
            <Provider store={store}>
                <FilterMenu />
            </Provider>
        );
    });


    it('should render correctly', () => {
        expect(component).toMatchSnapshot()
    })

    it('should pass correct properties to view', () =>{
        const view = component.find(FilterView)
        expect(view.prop("visible")).toBe(state.menus.showFilterMenu)
        expect(view.prop("enableSeeListings")).toBe(state.filters.outOfSync)

        expect(view.prop("prices")).toHaveLength(7)
        expect(view.prop("nRooms")).toHaveLength(6)
        expect(view.prop("sizes")).toHaveLength(9)

        expect(view.prop("callbacks")).toBeTruthy()
        expect(view.prop("filterValues")).toBeTruthy()
    })
})