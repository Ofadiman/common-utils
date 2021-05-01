/* eslint-disable no-await-in-loop */
export const sequencedForEach = async <CallbackReturn, Item>(
  array: Item[],
  callback: (item: Item, index: number, array: Item[]) => Promise<CallbackReturn>
): Promise<CallbackReturn[] | null> => {
  let index: number = 0
  const callbackResults: CallbackReturn[] = []
  for (const item of array) {
    const result = await callback(item, index, array)
    index++
    callbackResults.push(result)
  }

  const shouldReturnNull = callbackResults.every((item) => item === undefined)

  return shouldReturnNull ? null : callbackResults
}
