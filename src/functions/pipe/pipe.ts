/**
 * Call passed functions with given value from left to right.
 */
export const pipe = <Value>(...fns: ((arg: Value) => Value)[]) => {
  return (value: Value): Value => {
    return fns.reduce((accumulator: Value, fn) => {
      return fn(accumulator)
    }, value)
  }
}
