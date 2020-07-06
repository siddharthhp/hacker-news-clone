import React from 'react'
import ReactTimeAgo from 'react-time-ago'
import {
  NewsItem,
  Link,
  HideButton,
  Text,
  Author,
  MobileRow,
  Upvote,
} from './BulletinItem'

const BulletinItem = ({story, onHide, onUpvote}) => {
  const {num_comments, points, title, objectID, created_at, author, url} = story
  const handleHide = () => {
    onHide(objectID)
  }
  return (
    <NewsItem className="table-row">
      <MobileRow>
        <Upvote onClick={onUpvote.bind(null, objectID, points)}>
          <span className="arrow-up"></span>Upvote
        </Upvote>
        <Link href={url} target="_new">
          {title}
        </Link>{' '}
      </MobileRow>
      <MobileRow>
        <Text>
          {points} points by {author} <ReactTimeAgo date={created_at} />
        </Text>
        <HideButton onClick={handleHide}>[ Hide ]</HideButton>
      </MobileRow>
      <div className="col col-1">{num_comments}</div>
      <div className="col col-2">{points}</div>
      <div className="col col-3">
        <Upvote onClick={onUpvote.bind(null, objectID, points)}>
          <span className="arrow-up"></span>Upvote
        </Upvote>
      </div>
      <div className="col col-4">
        <Link href={url} target="_new">
          {title}
        </Link>{' '}
        <Text>by</Text> <Author>{author}</Author>{' '}
        <Text>
          <ReactTimeAgo date={created_at} />
        </Text>
        <HideButton onClick={handleHide}>[ Hide ]</HideButton>
      </div>
    </NewsItem>
  )
}

export default BulletinItem
