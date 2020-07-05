/* eslint-disable react/prop-types */
import React, {useContext} from 'react'
import ReactTimeAgo from 'react-time-ago'
import StoriesContext from '../../context/stories'
import {
  NewsItem,
  Link,
  HideButton,
  Text,
  Author,
  MobileRow,
  Upvote,
} from './BulletinItem'

const BulletinItem = ({story}) => {
  const {num_comments, points, title, objectID, created_at, author, url} = story
  const {dispatch} = useContext(StoriesContext)
  const hiddenElements =
    typeof localStorage !== 'undefined'
      ? JSON.parse(localStorage.getItem('hiddenElements')) || []
      : []
  const upvotedElements =
    typeof localStorage !== 'undefined'
      ? JSON.parse(localStorage.getItem('upvoteElements')) || []
      : []
  const upvote = () => {
    dispatch({type: 'INCREASE_UPVOTE', objectID})
    upvotedElements.push({
      objectID: points + 1,
    })
    localStorage.setItem('upvoteElements', JSON.stringify(upvotedElements))
  }
  const hideElement = () => {
    dispatch({type: 'HIDE_ELEMENT', objectID})
    hiddenElements.push(objectID)
    localStorage.setItem('hiddenElements', JSON.stringify(hiddenElements))
  }
  return (
    <NewsItem className="table-row">
      <MobileRow>
        <Upvote onClick={upvote}>
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
        <HideButton onClick={hideElement}>[ Hide ]</HideButton>
      </MobileRow>
      <div className="col col-1">{num_comments}</div>
      <div className="col col-2">{points}</div>
      <div className="col col-3">
        <Upvote onClick={upvote}>
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
        <HideButton onClick={hideElement}>[ Hide ]</HideButton>
      </div>
    </NewsItem>
  )
}

export default BulletinItem
