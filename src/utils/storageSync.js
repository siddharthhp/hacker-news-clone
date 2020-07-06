export const getItem = key => {
  return typeof localStorage !== 'undefined'
    ? JSON.parse(localStorage.getItem(key) || '{}')
    : {}
}

export const setItem = (key, value) => {
  if (typeof localStorage !== 'undefined')
    localStorage.setItem(key, JSON.stringify(value))
}
