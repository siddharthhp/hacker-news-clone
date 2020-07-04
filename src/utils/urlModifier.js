export function prepareQueryParams(params) {
  let queryparam = '?'
  for (let key in params) {
    queryparam += `${key}=${params[key]}&`
  }
  return queryparam.substring(0, queryparam.length - 1)
}

export function getQueryParams() {
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

export function isValidValue(val) {
  return val !== undefined && val !== null && val !== 'null' && val !== ''
}
