import React from 'react';
import {shallow} from 'enzyme';
import {describe, expect, it} from '@jest/globals';

import SearchBarView from './SearchBarView';

describe('SearchBar', () => {




  it('should render correctly with ArrowLooking Up', () => {
    const component = shallow(<SearchBarView
      filterArrowLookingUp={true}
      onFilterButtonClicked={jest.fn()}
      onSearch={jest.fn()}
      searchHasChanged={false}
      searchValue="search"
      setSearchValue={jest.fn()}
    />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with ArrowLooking Down', () => {
    const component = shallow(<SearchBarView
      filterArrowLookingUp={false}
      onFilterButtonClicked={jest.fn()}
      onSearch={jest.fn()}
      searchHasChanged={false}
      searchValue="search"
      setSearchValue={jest.fn()}
    />);
    expect(component).toMatchSnapshot();
  });

  it('fires FilterClick event', () =>{
  const onFilterClicked = jest.fn();

    const component = shallow(<SearchBarView
        filterArrowLookingUp={false}
        onFilterButtonClicked={onFilterClicked}
        onSearch={jest.fn()}
        searchHasChanged={false}
        searchValue="search"
        setSearchValue={jest.fn()}
      />);
      component.find(".filter-btn").simulate("click")
      expect(onFilterClicked).toHaveBeenCalledTimes(1)
  })
});
