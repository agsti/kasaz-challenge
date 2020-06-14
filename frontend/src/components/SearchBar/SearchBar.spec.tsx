import React from 'react';
import { mount, shallow} from 'enzyme';
import {describe, expect, it} from '@jest/globals';

import SearchBar from './index';

describe('SearchBar', () => {
  it('should render correctly in "debug" mode', () => {
      const component = shallow(<SearchBar />);
  
    expect(component).toMatchSnapshot();
  });
});
