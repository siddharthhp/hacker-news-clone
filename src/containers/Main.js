/* eslint-disable react/prop-types */
import React from 'react'
import BulletinHeader from '../components/BulletinHeader/index'
import BulletinFeed from './BulletinFeed'
import {Container} from '../styles/Container'
import {List} from '../styles/List'
import Global from '../styles/Global'
import Reset from '../styles/Reset'

const Main = ({store}) => {
  return (
    <Container>
      <h2>Hacker News Feed</h2>
      <Reset />
      <Global />
      <List>
        <BulletinHeader />
        <BulletinFeed store={store} />
      </List>
    </Container>
  )
}

export default Main
