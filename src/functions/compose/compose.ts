/**
 * Call passed functions with given value from right to left.
 */
export const compose = <Value>(...fns: ((arg: Value) => Value)[]) => {
  return (value: Value): Value => {
    return fns.reduceRight((accumulator: Value, fn) => {
      return fn(accumulator)
    }, value)
  }
}
