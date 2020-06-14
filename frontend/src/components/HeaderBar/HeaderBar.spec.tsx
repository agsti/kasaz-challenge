import React from 'react';
import { shallow} from 'enzyme';
import {describe, expect, it} from '@jest/globals';

import HeaderBar from './';

describe('HeaderBar', () => {
  it('should render correctly', () => {
      const component = shallow(<HeaderBar />);
  
    expect(component).toMatchSnapshot();
  });
});
