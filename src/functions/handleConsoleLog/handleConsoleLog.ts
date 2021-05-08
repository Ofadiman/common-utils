/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { blue, green, yellow } from 'chalk'

import { Result } from './handleConsoleLog.types'

/**
 * Utility function for use in storybook to console log event details.
 */
export const handleConsoleLog = (message?: string): Result => {
  return (...args: unknown[]): void => {
    if (message) {
      console.info(green.bold('[Message]'), message)
    }

    args.forEach((arg, index) => {
      /**
       * The `try {} catch {}` block catches circular JSON reference error (e.g. React's SyntheticEvent).
       */
      try {
        console.info(blue.bold(`[Argument #${index}]`), JSON.stringify(arg, null, 2))
      } catch {
        console.info(yellow.bold(`[Info]`, 'Circular dependency detected.'))
        console.info(blue.bold(`[Argument #${index}]`), arg)
      }
    })
  }
}
