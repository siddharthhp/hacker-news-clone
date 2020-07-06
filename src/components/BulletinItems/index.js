import React from 'react'
import BulletinItem from '../BulletinItem/index'

export default ({stories = [], onHide, onUpvote}) => {
  const renderBulletins = () => {
    return stories.map(story => {
      if (story.isHidden || !story.title) return null
      return (
        <BulletinItem
          onUpvote={onUpvote}
          onHide={onHide}
          key={story.objectID}
          story={story}
        />
      )
    })
  }

  return renderBulletins()
}
