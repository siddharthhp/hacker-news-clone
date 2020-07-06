import {parse} from 'query-string'

export const getQueryParams = queryStr => {
  return parse(queryStr || '')
}

export const prepareQueryParams = params => {
  let queryParam = '?'
  for (let key in params) {
    queryParam += `${key}=${params[key]}&`
  }
  return queryParam.substring(0, queryParam.length - 1)
}
