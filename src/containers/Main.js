import React from 'react'
import BulletinHeader from '../components/BulletinHeader/index'
import BulletinFeed from './BulletinFeed'
import {Container} from '../styles/Container'
import {List} from '../styles/List'
import GlobalFonts from '../styles/Fonts'
import Reset from '../styles/Reset'

const Main = ({...props}) => {
  return (
    <Container>
      <h2>Hacker News Feed</h2>
      <Reset />
      <GlobalFonts />
      <List>
        <BulletinHeader />
        <BulletinFeed {...props} />
      </List>
    </Container>
  )
}

export default Main
