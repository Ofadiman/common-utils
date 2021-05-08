import { isFunction } from './isFunction'
import * as t from './isFunction.test.utils'

describe('isFunction function', () => {
  describe('not function', () => {
    t.notFunctionTestCases.forEach(({ expectedResult, value, title }) => {
      test(`${title}`, () => {
        const isFn = isFunction({ type: 'any', value })

        expect(isFn).toEqual(expectedResult)
      })
    })
  })

  describe('any function', () => {
    t.anyFunctionTestCases.forEach(({ value, expectedResult, title }) => {
      test(`${title}`, () => {
        const isFn = isFunction({ type: 'any', value })

        expect(isFn).toEqual(expectedResult)
      })
    })
  })

  describe('generator function', () => {
    t.generatorFunctionTestCases.forEach(({ expectedResult, value, title }) => {
      test(`${title}`, () => {
        const isFn = isFunction({ type: 'generator', value })

        expect(isFn).toEqual(expectedResult)
      })
    })
  })

  describe('synchronous function', () => {
    t.synchronousFunctionTestCases.forEach(({ expectedResult, value, title }) => {
      test(`${title}`, () => {
        const isFn = isFunction({ type: 'synchronous', value })

        expect(isFn).toEqual(expectedResult)
      })
    })
  })

  describe('asynchronous function', () => {
    t.asynchronousFunctionTestCases.forEach(({ expectedResult, value, title }) => {
      test(`${title}`, () => {
        const isFn = isFunction({ type: 'asynchronous', value })

        expect(isFn).toEqual(expectedResult)
      })
    })
  })
})
