import { handleConsoleLog } from './handleConsoleLog'
import * as t from './handleConsoleLog.test.utils'

describe('handleConsoleLog function', () => {
  afterEach(() => {
    t.consoleInfoSpy.mockReset()
  })

  afterAll(() => {
    t.consoleInfoSpy.mockRestore()
    t.jsonStringifySpy.mockRestore()
  })

  test('should call `console.info` with passed message', () => {
    handleConsoleLog(t.consoleInfoMessage)()

    expect(t.consoleInfoSpy).toHaveBeenNthCalledWith(1, expect.stringContaining('[Message]'), t.consoleInfoMessage)
    expect(t.consoleInfoSpy).toHaveBeenCalledTimes(1)
  })

  test('should call `console.info` for passed arguments', () => {
    handleConsoleLog()(...t.args)

    expect(t.consoleInfoSpy).toHaveBeenNthCalledWith(
      1,
      expect.stringContaining('[Argument #0]'),
      JSON.stringify(t.args[0], null, 2)
    )
    expect(t.consoleInfoSpy).toHaveBeenNthCalledWith(
      2,
      expect.stringContaining('[Argument #1]'),
      JSON.stringify(t.args[1], null, 2)
    )
    expect(t.consoleInfoSpy).toHaveBeenCalledTimes(2)
  })

  test('should call `console.info` with passed message and arguments', () => {
    handleConsoleLog(t.consoleInfoMessage)(...t.args)

    expect(t.consoleInfoSpy).toHaveBeenNthCalledWith(1, expect.stringContaining('[Message]'), t.consoleInfoMessage)
    expect(t.consoleInfoSpy).toHaveBeenNthCalledWith(
      2,
      expect.stringContaining('[Argument #0]'),
      JSON.stringify(t.args[0], null, 2)
    )
    expect(t.consoleInfoSpy).toHaveBeenNthCalledWith(
      3,
      expect.stringContaining('[Argument #1]'),
      JSON.stringify(t.args[1], null, 2)
    )
    expect(t.consoleInfoSpy).toHaveBeenCalledTimes(3)
  })

  test('should not call `console.info` when message and arguments are not passed', () => {
    handleConsoleLog()()

    expect(t.consoleInfoSpy).toHaveBeenCalledTimes(0)
  })

  test('should call `console.info` with basic JavaScript object when `JSON.stringify` throws an error', () => {
    t.jsonStringifySpy.mockImplementation(() => {
      throw t.circularStructureError
    })
    handleConsoleLog(t.consoleInfoMessage)(...t.args)

    expect(t.consoleInfoSpy).toHaveBeenNthCalledWith(1, expect.stringContaining('[Message]'), t.consoleInfoMessage)
    expect(t.consoleInfoSpy).toHaveBeenNthCalledWith(2, expect.stringContaining('[Info] Circular dependency detected.'))
    expect(t.consoleInfoSpy).toHaveBeenNthCalledWith(3, expect.stringContaining('[Argument #0]'), String(t.args[0]))
    expect(t.consoleInfoSpy).toHaveBeenNthCalledWith(4, expect.stringContaining('[Info] Circular dependency detected.'))
    expect(t.consoleInfoSpy).toHaveBeenNthCalledWith(5, expect.stringContaining('[Argument #1]'), t.args[1])
    expect(t.consoleInfoSpy).toHaveBeenCalledTimes(5)
  })
})
