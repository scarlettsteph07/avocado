export const logger = (store: any) => (next: any) => (
  action: any,
) => {
  console.group(action.type)
  console.log('Action: ', action)
  const result = next(action)
  console.log('new state: ', store.getState())
  console.groupEnd()
  return result
}
