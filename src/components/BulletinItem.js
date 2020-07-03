/* eslint-disable react/prop-types */
import React, {useContext} from 'react'
import StoriesContext from '../context/stories'

const BulletinItem = ({story}) => {
  const {dispatch} = useContext(StoriesContext)
  const objectID = story.objectID
  return (
    <li>
      <span>{story.author}</span>
      <span>{story.points}</span>
      <span>{story.objectID}</span>
      <button
        onClick={e => dispatch({type: 'INCREASE_UPVOTE', objectID})}
      ></button>
    </li>
  )
}

export default BulletinItem
