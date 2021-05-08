/**
 * Returns a function that will call the passed function only once.
 * In case of multiple calls, the cached result will be returned.
 */
export const once = <InferArgs, InferReturn>(
  fn: (...args: InferArgs[]) => InferReturn
): ((...args: InferArgs[]) => InferReturn) => {
  let shouldCallFunction = true
  let cachedResult: InferReturn

  return (...args: InferArgs[]): InferReturn => {
    if (shouldCallFunction) {
      shouldCallFunction = false
      const result = fn(...args)
      cachedResult = result

      return result
    }

    return cachedResult
  }
}
