export const filterNews = (array1, key) => {
  const array2 =
    typeof localStorage !== 'undefined'
      ? JSON.parse(localStorage.getItem(key)) || []
      : []
  return array1.filter(item => {
    return !array2.includes(item.objectID)
  })
}

export const pushItemInStorage = (key, value) => {
  const storage =
    typeof localStorage !== 'undefined'
      ? JSON.parse(localStorage.getItem(key)) || []
      : []
  storage.push(value)
  localStorage.setItem(key, JSON.stringify(storage))
}
