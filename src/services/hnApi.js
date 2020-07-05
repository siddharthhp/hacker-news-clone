import axios from 'axios'
export const baseUrl = 'https://hn.algolia.com/api/v1/search'

const getStories = async page => {
  const response = await axios(`${baseUrl}?page=${page}`).then(({data}) => data)
  console.log(response)
  return response
}

export default getStories
