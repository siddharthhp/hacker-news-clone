import React from 'react'
import BulletinHeader from '../components/BulletinHeader/index'
import BulletinFeed from './BulletinFeed'
import {Container} from '../styles/Container'
import {List} from '../styles/List'
import Global from '../styles/Global'

const Main = ({...props}) => {
  return (
    <Container>
      <h2>Hacker News Feed</h2>
      <Global />
      <List>
        <BulletinHeader />
        <BulletinFeed {...props} />
      </List>
    </Container>
  )
}

export default Main
