import { getRandomInteger } from './getRandomInteger'
import * as t from './getRandomInteger.test.utils'

describe('getRandomInteger function', () => {
  afterEach(() => {
    t.mathRandomSpy.mockReset()
  })

  afterAll(() => {
    t.mathRandomSpy.mockRestore()
  })

  test('should throw an error when `max` is less than `min`', () => {
    expect(() => getRandomInteger({ max: 0, min: 10 })).toThrow()
  })

  t.testCases.forEach(({ min, max, expectedResult, mathRandomReturn }) => {
    test(`should return ${expectedResult} for min: ${min}, max: ${max}`, () => {
      t.mathRandomSpy.mockImplementationOnce(() => mathRandomReturn)

      const result = getRandomInteger({ max, min })

      expect(result).toEqual(expectedResult)
    })
  })
})
