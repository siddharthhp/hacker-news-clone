import React, {useState, useReducer, useEffect} from 'react'
import storiesReducer from '../reducers/stories'
import {BulletinChart} from './BulletinChart'
import BulletinItem from '../components/BulletinItem/index'
import StoriesContext from '../context/stories'
import getStories from '../services/hnApi'
import Pagination from '../components/Pagination'
import {withRouter} from 'react-router-dom'
import {
  prepareQueryParams,
  getQueryParams,
  isValidValue,
} from '../utils/urlModifier'

const BulletinFeed = props => {
  const [stories, dispatch] = useReducer(storiesReducer, props.store.hits)
  const [totalPages, setTotalPages] = useState(props.store.nbPages)
  const params = getQueryParams()
  const pageParam =
    isValidValue(params) && isValidValue(params.page)
      ? parseInt(params.page)
      : props.store.page

  const addParamToUrl = () => {
    const payload = {
      page: page,
    }
    let url = prepareQueryParams(payload)
    props.history.push(url)
  }
  const [page, setPage] = useState(pageParam)
  useEffect(() => {
    getStories(page).then(({hits, nbPages}) => {
      dispatch({type: 'POPULATE_STORIES', hits})
      !totalPages && setTotalPages(nbPages)
    })
    addParamToUrl()
  }, [page])

  const loadNextPage = () => {
    setPage(page + 1)
  }

  const loadPreviousPage = () => {
    setPage(page - 1)
  }
  return (
    <StoriesContext.Provider value={{stories, dispatch}}>
      {stories.map(story => {
        return (
          story.title && <BulletinItem key={story.objectID} story={story} />
        )
      })}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        loadPreviousPage={loadPreviousPage}
        loadNextPage={loadNextPage}
      />
      <BulletinChart />
    </StoriesContext.Provider>
  )
}

export default withRouter(BulletinFeed)
