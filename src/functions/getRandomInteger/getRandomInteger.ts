import { Args } from './getRandomInteger.types'

export const getRandomInteger = (args: Args): number => {
  const { max, min } = args

  if (min > max) {
    throw new Error('`min` cannot be more than `max``!')
  }

  return Math.round(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min))
}
