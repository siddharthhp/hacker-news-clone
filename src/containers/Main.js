import React from 'react'
import BulletinHeader from '../components/BulletinHeader/index'
import BulletinFeed from './BulletinFeed'
import {Container, List} from '../styles/Container'
import GlobalFonts from '../styles/Fonts'
import Reset from '../styles/Reset'

const Main = () => {
  return (
    <Container>
      <Reset />
      <GlobalFonts />
      <List>
        <BulletinHeader />
        <BulletinFeed />
      </List>
    </Container>
  )
}

export default Main
