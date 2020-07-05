/* eslint-disable react/prop-types */
import React, {useState, useReducer, useEffect} from 'react'
import storiesReducer from '../reducers/stories'
import {BulletinChart} from './BulletinChart'
import BulletinItem from '../components/BulletinItem/index'
import StoriesContext from '../context/stories'
import getStories from '../services/hnApi'
import Pagination from '../components/Pagination'
import {getQueryParams, prepareQueryParams} from '../utils/urlModifier'

const BulletinFeed = props => {
  const [stories, dispatch] = useReducer(storiesReducer, props.store.hits || [])
  const [totalPages, setTotalPages] = useState(0)
  const {page: pageParam} = getQueryParams(props.location.search)
  const page = parseInt(pageParam) || 1

  const addParamToUrl = pageNumber => {
    const payload = {
      page: pageNumber,
    }
    let url = prepareQueryParams(payload)
    props.history.push(url)
  }

  useEffect(() => {
    console.log('bulletin use effect')
    getStories(page).then(({hits, nbPages}) => {
      dispatch({type: 'POPULATE_STORIES', hits})
      !totalPages && setTotalPages(nbPages)
    })
  }, [page])

  if (!pageParam || !parseInt(pageParam)) {
    addParamToUrl(1)
    return null
  }

  const loadNextPage = () => {
    addParamToUrl(page + 1)
  }

  const loadPreviousPage = () => {
    return page <= 1 ? '' : addParamToUrl(page - 1)
  }
  console.log('******bulletin use effect')

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

export default BulletinFeed
