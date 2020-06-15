import React from 'react';
import { render, mount } from 'enzyme';
import { describe, expect, it } from '@jest/globals';

import 'jsdom-global/register';

import ListingListView from './ListingsListView';

const onScroll = jest.fn()
const component = mount(<ListingListView
    listings={[
        {
            nBath :1,
            nRooms: 2,
            picture: "/img.jpg",
            price: 1000000,
            priceSqm: 312.12,
            sqm: 500,
            title: "title"
        }
    ]}
    scrollPosition={500}
    onScroll={onScroll}
/>);

describe('ListingListView', () => {
    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });


    it('Scrolling should fire onScroll', () =>{
        component.simulate('scroll', { deltaY: 5000 });

        expect(onScroll).toHaveBeenCalled()
    });

    it('ScrollPosition sets div scroll', () =>{
        expect(component.getDOMNode().scrollTop).toBe(500);
    });
});
