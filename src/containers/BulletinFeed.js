import React, {useState, useMemo, useEffect, useContext} from 'react'
import {BulletinChart} from '../components/BulletinChart/index'
import BulletinItems from '../components/BulletinItems/index'
import getStories from '../services/newsFeed'
import Pagination from '../components/Pagination'
import {getQueryParams, prepareQueryParams} from '../utils/urlModifier'
import {BorderContainer} from '../styles/Container'
import AppContext from '../context/appState'
import {LoaderContainer, Loader} from '../styles/Container'
import {getItem, setItem} from '../utils/storageSync'

const BulletinFeed = props => {
  const {store} = useContext(AppContext)
  const [stories, setStories] = useState(store.hits || [])
  const [isLoading, setLoading] = useState(false)

  const formattedStories = useMemo(() => {
    const cachedUpdates = getItem('cachedUpdates')
    return stories.map(story => {
      if (cachedUpdates[story.objectID]) {
        return {
          ...story,
          ...cachedUpdates[story.objectID],
        }
      }
      return story
    })
  }, [stories])

  const chartData = useMemo(() => {
    return formattedStories.reduce((obj, item) => {
      if (!item.isHidden) {
        obj[item.objectID] = item.points
      }
      return obj
    }, {})
  }, [formattedStories])

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

  const hideStory = id => {
    const cachedUpdates = getItem('cachedUpdates')
    const cachedItemValues = cachedUpdates[id] || {}
    cachedUpdates[id] = {
      ...cachedItemValues,
      isHidden: true,
    }
    setItem('cachedUpdates', cachedUpdates)
    setStories(
      stories.map(story => {
        if (story.objectID === id) {
          return {
            ...story,
            isHidden: true,
          }
        }
        return story
      }),
    )
  }

  const upvote = (id, points) => {
    const cachedUpdates = getItem('cachedUpdates')
    const cachedItemValues = cachedUpdates[id] || {}
    cachedUpdates[id] = {
      ...cachedItemValues,
      points: points + 1,
    }
    setItem('cachedUpdates', cachedUpdates)
    setStories(
      stories.map(story => {
        if (story.objectID === id) {
          return {
            ...story,
            points: points + 1,
          }
        }
        return story
      }),
    )
  }

  useEffect(() => {
    setLoading(true)
    getStories(page)
      .then(({hits, nbPages}) => {
        setStories(hits)
        if (!totalPages) {
          setTotalPages(nbPages)
        }
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
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
    <>
      {isLoading && (
        <LoaderContainer>
          <Loader></Loader>
        </LoaderContainer>
      )}
      <BulletinItems
        onUpvote={upvote}
        onHide={hideStory}
        stories={formattedStories}
      />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        loadPreviousPage={loadPreviousPage}
        loadNextPage={loadNextPage}
      />
      <BorderContainer>
        <BulletinChart data={chartData} />
      </BorderContainer>
    </>
  )
}

export default BulletinFeed
