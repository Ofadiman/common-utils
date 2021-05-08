/* eslint-disable no-empty-function */

export const asynchronousFunction = async (): Promise<void> => {}

export function* generatorFunction(): Generator {}

export const synchronousFunction = (): void => {}

export const notFunctionTestCases = [
  {
    expectedResult: false,
    title: 'should return `false` for object',
    value: {}
  },
  {
    expectedResult: false,
    title: 'should return `false` for string',
    value: 'string'
  },
  {
    expectedResult: false,
    title: 'should return `false` for number',
    value: 1245142
  },
  {
    expectedResult: false,
    title: 'should return `false` for RegExp',
    value: /asdf/u
  },
  {
    expectedResult: false,
    title: 'should return `false` for boolean',
    value: false
  },
  {
    expectedResult: false,
    title: 'should return `false` for null',
    value: null
  },
  {
    expectedResult: false,
    title: 'should return `false` for `undefined`',
    value: undefined
  }
]

export const anyFunctionTestCases = [
  {
    expectedResult: true,
    title: 'should return `true` for asynchronous function',
    value: asynchronousFunction
  },
  {
    expectedResult: true,
    title: 'should return `true` for generator function',
    value: generatorFunction
  },
  {
    expectedResult: true,
    title: 'should return `true` for synchronous function',
    value: synchronousFunction
  }
]

export const generatorFunctionTestCases = [
  {
    expectedResult: false,
    title: 'should return `false` for asynchronous function',
    value: asynchronousFunction
  },
  {
    expectedResult: true,
    title: 'should return `true` for generator function',
    value: generatorFunction
  },
  {
    expectedResult: false,
    title: 'should return `false` for synchronous function',
    value: synchronousFunction
  }
]

export const synchronousFunctionTestCases = [
  {
    expectedResult: false,
    title: 'should return `false` for asynchronous function',
    value: asynchronousFunction
  },
  {
    expectedResult: false,
    title: 'should return `false` for generator function',
    value: generatorFunction
  },
  {
    expectedResult: true,
    title: 'should return `false` for synchronous function',
    value: synchronousFunction
  }
]
export const asynchronousFunctionTestCases = [
  {
    expectedResult: true,
    title: 'should return `true` for asynchronous function',
    value: asynchronousFunction
  },
  {
    expectedResult: false,
    title: 'should return `false` for generator function',
    value: generatorFunction
  },
  {
    expectedResult: false,
    title: 'should return `false` for synchronous function',
    value: synchronousFunction
  }
]
