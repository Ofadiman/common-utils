export const getArray = <Type>(length: number, callback: (index: number) => Type): Type[] => {
  return new Array(length).fill(null).map((_item, index) => callback(index))
}
