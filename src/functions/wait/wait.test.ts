import { wait } from './wait'

describe('wait function', () => {
  test('should wait specified amount of time before resolving the promise', async () => {
    const beforePromise = Date.now()
    await wait(100)
    const afterPromise = Date.now()
    const diff = afterPromise - beforePromise

    expect(diff > 100).toEqual(true)
  })
})
