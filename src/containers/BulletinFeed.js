/* eslint-disable react/prop-types */
import React, {useState, useReducer, useEffect} from 'react'
import storiesReducer from '../reducers/reducer'
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
  const params = getQueryParams()
  const pageParam =
    isValidValue(params) && isValidValue(params.page)
      ? parseInt(params.page)
      : 1

  const [stories, dispatch] = useReducer(storiesReducer, [])
  const [page, setPage] = useState(pageParam)
  const [totalPages, setTotalPages] = useState(0)

  const addParamToUrl = () => {
    const payload = {
      page: page,
    }
    let url = prepareQueryParams(payload)
    props.history.push(url)
  }

  useEffect(() => {
    getStories(page).then(({hits, nbPages}) => {
      dispatch({type: 'POPULATE_STORIES', hits})
      setTotalPages(nbPages)
    })
    addParamToUrl()
  }, [page])

  const loadNextPage = () => {
    setPage(page + 1)
  }

  const loadPreviousPage = () => {
    if (page >= 1) {
      setPage(page - 1)
    }
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
    </StoriesContext.Provider>
  )
}

export default withRouter(BulletinFeed)
