export const firstLetterCapitalized = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const firstLetterCapitalizedHtml = (str: string) => {
  const list = str.split('<p>')
  const firstTextWithCapital = list[0].charAt(0).toUpperCase() + list[0].slice(1)
  list[0] = firstTextWithCapital

  return list.join('<p>')
}
