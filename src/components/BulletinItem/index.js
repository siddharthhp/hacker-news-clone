/* eslint-disable react/prop-types */
import React from 'react'
//import StoriesContext from '../../context/stories'
import {NewsItem} from './BulletinItem'

const BulletinItem = ({story}) => {
  //const {dispatch} = useContext(StoriesContext)
  //const objectID = story.objectID
  return (
    <NewsItem className="table-row">
      <div className="col col-1" data-label="Comments">
        {story.num_comments}
      </div>
      <div className="col col-2" data-label="Vote Count">
        {story.points}
      </div>
      <div className="col col-3" data-label="Upvote">
        <button>
          <span className="arrow-up"></span>
        </button>
      </div>
      <div className="col col-4" data-label="News Details">
        {story.title}
      </div>
    </NewsItem>
  )
}

export default BulletinItem
