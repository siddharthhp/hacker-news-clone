export const prepareQueryParams = params => {
  let queryParam = '?'
  for (let key in params) {
    queryParam += `${key}=${params[key]}&`
  }
  return queryParam.substring(0, queryParam.length - 1)
}

export const getQueryParams = () => {
  const queryParams = {}

  const queryStr = isValidValue(window.location.search)
    ? window.location.search.substr(1)
    : ''

  if (isValidValue(queryStr)) {
    queryStr.split('&').forEach(query => {
      query = query.split('=')
      if (['null', 'undefined'].indexOf(query[1]) > -1) {
        query[1] = null
      }
      queryParams[query[0]] = decodeURIComponent(query[1])
    })
  }

  return queryParams
}

export const isValidValue = val => {
  return val !== undefined && val !== null && val !== 'null' && val !== ''
}
