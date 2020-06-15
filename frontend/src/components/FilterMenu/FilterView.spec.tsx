import React from 'react';
import { shallow} from 'enzyme';
import {describe, expect, it} from '@jest/globals';

import FilterView from './FilterView';

describe('FilterView', () => {
  it('should render correctly', () => {
       const component = shallow(<FilterView 
        visible={true}
        
        prices={[
            {value: 1, label:"price 1"}
        ]}
        sizes={[
            {value: 1, label:"size 1"}
        ]}
        nRooms={[
            {value: 1, label:"room 1"}
        ]}

        onClickSeeListings= {() => {}}
        enableSeeListings={true}

        callbacks={{
            minPrice: null,
            maxPrice: null,
            minSizeSqm: null,
            maxSizeSqm: null,
            minRooms:null,
        }}

        filterValues={{
            minPrice : null, 
            maxPrice : null,
            minSizeSqm : null,
            maxSizeSqm : null,
            minRooms: {value: 1, label:"room 1"},
        }}
        validation={{
            sizesErr : false, 
            pricesErr : false
        }}
       />);
  
    expect(component).toMatchSnapshot();
  });
});
