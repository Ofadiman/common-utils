export const args = ['something', 5]

export const consoleInfoMessage = 'storybookLog called'

export const circularStructureError = new TypeError('Converting circular structure to JSON')

export const consoleInfoSpy = jest
  .spyOn(console, 'info')
  .mockName('consoleInfoSpy')
  .mockImplementation(() => null)

export const jsonStringifySpy = jest.spyOn(JSON, 'stringify').mockName('jsonStringifySpy')
