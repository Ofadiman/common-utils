import { compose } from './compose'
import * as t from './compose.test.utils'

describe('compose function', () => {
  test('should call passed functions from right to left', () => {
    const result = compose(t.reverse, t.capitalize)('compose')

    expect(result).toEqual('esopmoC')
  })
})
