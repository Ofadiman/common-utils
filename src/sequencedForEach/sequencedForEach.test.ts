import { sequencedForEach } from './sequencedForEach'
import * as t from './sequencedForEach.test.utils'

describe('sequencedForEach function', () => {
  afterEach(() => {
    t.callbackMock.mockReset()
  })

  test('should call passed callback with correct arguments', async () => {
    t.callbackMock.mockImplementation(async () => {
      return undefined
    })

    await sequencedForEach(t.testArray, t.callbackMock)

    expect(t.callbackMock).toHaveBeenNthCalledWith(1, t.testArray[0], 0, t.testArray)
    expect(t.callbackMock).toHaveBeenNthCalledWith(2, t.testArray[1], 1, t.testArray)
    expect(t.callbackMock).toHaveBeenNthCalledWith(3, t.testArray[2], 2, t.testArray)
  })

  test('should return all callback results', async () => {
    t.callbackMock.mockImplementationOnce(async () => {
      return undefined
    })
    t.callbackMock.mockImplementationOnce(async () => {
      return t.secondCallReturn
    })
    t.callbackMock.mockImplementationOnce(async () => {
      return t.thirdCallReturn
    })

    const result = await sequencedForEach(t.testArray, t.callbackMock)

    expect(result).toEqual([undefined, t.secondCallReturn, t.thirdCallReturn])
  })

  test('should return `null` if all callbacks return `undefined`', async () => {
    t.callbackMock.mockImplementation(async () => undefined)

    const result = await sequencedForEach(t.testArray, t.callbackMock)

    expect(result).toBeNull()
  })
})
