import React from 'react'
import {Header} from './BulletinHeader'

const BulletinHeader = () => (
  <Header>
    <div className="col col-1">Comments</div>
    <div className="col col-2">Vote Count</div>
    <div className="col col-3">Upvote</div>
    <div className="col col-4">News Details</div>
  </Header>
)
export default BulletinHeader
