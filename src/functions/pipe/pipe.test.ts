import { pipe } from './pipe'
import * as t from './pipe.test.utils'

describe('pipe function', () => {
  test('should call passed functions from left to right', () => {
    const result = pipe(t.capitalize, t.reverse)('pipe')

    expect(result).toEqual('epiP')
  })
})
