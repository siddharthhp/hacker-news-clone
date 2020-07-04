/* eslint-disable react/prop-types */
import React, {useContext} from 'react'
import ReactTimeAgo from 'react-time-ago'
import StoriesContext from '../../context/stories'
import {
  NewsItem,
  Link,
  HideButton,
  GreyText,
  Author,
  MobileRow,
} from './BulletinItem'

const BulletinItem = ({story}) => {
  const {num_comments, points, title, objectID, created_at, author, url} = story
  const {dispatch} = useContext(StoriesContext)
  const hiddenElements =
    JSON.parse(localStorage.getItem('hiddenElements')) || []
  const upvotedElements =
    JSON.parse(localStorage.getItem('upvoteElements')) || []
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
        <button onClick={upvote}>
          <span className="arrow-up"></span>
        </button>
        <Link href={url} target="_new">
          {title}
        </Link>{' '}
      </MobileRow>
      <MobileRow>
        <GreyText>
          {points} points by {author} <ReactTimeAgo date={created_at} />
        </GreyText>
        <HideButton onClick={hideElement}>[ Hide ]</HideButton>
      </MobileRow>
      <div className="col col-1">{num_comments}</div>
      <div className="col col-2">{points}</div>
      <div className="col col-3">
        <button onClick={upvote}>
          <span className="arrow-up"></span>
        </button>
      </div>
      <div className="col col-4">
        <Link href={url} target="_new">
          {title}
        </Link>{' '}
        <GreyText>by</GreyText> <Author>{author}</Author>{' '}
        <GreyText>
          <ReactTimeAgo date={created_at} />
        </GreyText>
        <HideButton onClick={hideElement}>[ Hide ]</HideButton>
      </div>
    </NewsItem>
  )
}

export default BulletinItem
