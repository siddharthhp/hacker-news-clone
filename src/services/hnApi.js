import axios from 'axios'
export const baseUrl = 'http://hn.algolia.com/api/v1/search'
//export const paginationUrl = `${baseUrl}?page=${number}`;

const getStories = async page => {
  const response = await axios(`${baseUrl}?page=${page}`).then(({data}) => data)
  return response
}

export default getStories
