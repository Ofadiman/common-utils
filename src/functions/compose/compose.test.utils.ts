export const reverse = (string: string): string => string.split('').reverse().join('')

export const capitalize = (string: string): string => `${string.charAt(0).toUpperCase()}${string.slice(1)}`
