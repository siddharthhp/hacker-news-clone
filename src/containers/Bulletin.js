import React, {useReducer, useEffect} from 'react'
import storiesReducer from '../reducers/reducer'
import BulletinItem from '../components/BulletinItem'
import StoriesContext from '../context/stories'
import getStories from '../services/hnApi'

const BulletinContainer = () => {
  const [stories, dispatch] = useReducer(storiesReducer, [])

  useEffect(() => {
    const items = getStories().then(({hits}) =>
      dispatch({type: 'POPULATE_STORIES', hits}),
    )
  }, [])

  return (
    <StoriesContext.Provider value={{stories, dispatch}}>
      <ul>
        {stories.map(story => {
          return <BulletinItem key={story.objectID} story={story} />
        })}
      </ul>
    </StoriesContext.Provider>
  )
}

export default BulletinContainer
