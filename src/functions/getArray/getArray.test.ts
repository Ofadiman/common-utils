import { getArray } from './getArray'

describe('getArray function', () => {
  test('should create an array based on given callback', () => {
    const result = getArray(3, (index) => index)

    expect(result).toEqual([0, 1, 2])
  })
})
