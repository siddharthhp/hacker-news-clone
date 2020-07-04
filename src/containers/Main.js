import React from 'react'
import BulletinHeader from '../components/BulletinHeader/index'
import BulletinFeed from './BulletinFeed'
import {Container, List} from '../Styled/Container'

const Main = () => {
  return (
    <Container>
      <List>
        <BulletinHeader />
        <BulletinFeed />
      </List>
    </Container>
  )
}

export default Main
