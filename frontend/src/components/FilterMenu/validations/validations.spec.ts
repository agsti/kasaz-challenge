import {describe, expect, it} from '@jest/globals';

import {isSizesOk, isPricesOk} from "./index";


describe('Filter Validations', () => {
  it('prices are OK when one or both of them is null', () => {
     expect(isPricesOk(null, 3)).toBeTruthy()
     expect(isPricesOk(3, null)).toBeTruthy()
     expect(isPricesOk(null, null)).toBeTruthy()
  })

  it('prices are not OK when min is greater or equal than max', () => {
     expect(isPricesOk(5, 3)).toBeFalsy()
     expect(isPricesOk(3, 3)).toBeFalsy()
  })

  it('sizes are OK when one or both of them is null', () => {
     expect(isSizesOk(null, 3)).toBeTruthy()
     expect(isSizesOk(3, null)).toBeTruthy()
     expect(isSizesOk(null, null)).toBeTruthy()
  })
  it('sizes are not OK when min is greater or equal than max', () => {
     expect(isSizesOk(5, 3)).toBeFalsy()
     expect(isSizesOk(3, 3)).toBeFalsy()
  })
})
