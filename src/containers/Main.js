import React from 'react'
import BulletinHeader from '../components/BulletinHeader/index'
import BulletinFeed from './BulletinFeed'
import {List} from '../Styled/Container'

const Main = () => {
  return (
    <List>
      <BulletinHeader />
      <BulletinFeed />
    </List>
  )
}

export default Main
