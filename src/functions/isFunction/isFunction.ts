import * as c from './isFunction.constants'
import { Args } from './isFunction.types'

export const isFunction = (args: Args): boolean => {
  switch (args.type) {
    case 'any':
      return Object.values<string>(c).includes(Object.prototype.toString.call(args.value))
    case 'asynchronous':
      return Object.prototype.toString.call(args.value) === c.asynchronousFunctionStringRepresentation
    case 'generator':
      return Object.prototype.toString.call(args.value) === c.generatorFunctionStringRepresentation
    case 'synchronous':
      return Object.prototype.toString.call(args.value) === c.synchronousFunctionStringRepresentation
  }
}
