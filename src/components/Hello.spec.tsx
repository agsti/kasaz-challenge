import React from 'react';
import { mount} from 'enzyme';
import {describe, expect, it} from '@jest/globals';

import {Hello} from './Hello';

describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
      const component = mount(<Hello  compiler="hoa" framework="frameworlk"/>);
  
    expect(component).toMatchSnapshot();
  });
});
