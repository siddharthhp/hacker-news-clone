/* eslint-disable react/prop-types */
import React, {useState, useReducer, useEffect, useContext} from 'react'
import storiesReducer from '../reducers/stories'
import {BulletinChart} from '../components/BulletinChart/index'
import BulletinItem from '../components/BulletinItem/index'
import StoriesContext from '../context/stories'
import getStories from '../services/hnApi'
import Pagination from '../components/Pagination'
import {getQueryParams, prepareQueryParams} from '../utils/urlModifier'
import {filterNews} from '../utils/storageSync'
import {BorderContainer} from '../styles/Container'
import AppContext from '../context/appState'

const BulletinFeed = props => {
  const {store} = useContext(AppContext)
  const [stories, dispatch] = useReducer(storiesReducer, store.hits || [])
  const [totalPages, setTotalPages] = useState(store.nbPages || 0)
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
    getStories(page).then(({hits, nbPages}) => {
      hits = filterNews(hits, 'hiddenElements')
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
      <BorderContainer>
        <BulletinChart />
      </BorderContainer>
    </StoriesContext.Provider>
  )
}

export default BulletinFeed
