export const mathRandomSpy = jest.spyOn(Math, 'random')

export const testCases = [
  {
    expectedResult: 3,
    mathRandomReturn: 0.00000001,
    max: 8,
    min: 3
  },
  {
    expectedResult: 4,
    mathRandomReturn: 0.00000001,
    max: 8,
    min: 3.00000001
  },
  {
    expectedResult: 8,
    mathRandomReturn: 0.99999999,
    max: 8,
    min: 3
  },
  {
    expectedResult: 7,
    mathRandomReturn: 0.99999999,
    max: 7.99999999,
    min: 3
  }
]
