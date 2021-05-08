import { once } from './once'
import * as t from './once.test.utils'

describe('once function', () => {
  test('should call passed function only once', () => {
    const callOnce = once(t.callMeOnce)

    callOnce()
    callOnce()
    callOnce()

    expect(t.callMeOnce).toHaveBeenCalledTimes(1)
  })

  test('should return cached value', () => {
    const multiplyOnce = once(t.multiply)
    const resultOne = multiplyOnce(2)
    const resultTwo = multiplyOnce(5)
    const resultThree = multiplyOnce(10)

    expect(resultOne).toEqual(4)
    expect(resultTwo).toEqual(4)
    expect(resultThree).toEqual(4)
  })
})
