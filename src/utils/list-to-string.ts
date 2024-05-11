export const listToString = (list: string[]) => {
  if (list.length <= 1) return list.join('')
  const last = list.pop()
  return list.join(', ') + (last ? ` y ${last}` : '')
}
