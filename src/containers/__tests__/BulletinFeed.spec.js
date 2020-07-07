import React from 'react'
import {createMemoryHistory} from 'history'
import {render, fireEvent} from '@testing-library/react'
import BulletinFeed from '../BulletinFeed'
import AppContext from '../../context/appState'

const store = {
  store: {
    hits: [
      {
        created_at: '2017-02-23T13:01:08.000Z',
        title: 'Announcing the first SHA-1 collision',
        url:
          'https://security.googleblog.com/2017/02/announcing-first-sha1-collision.html',
        author: 'pfg',
        points: 3030,
        story_text: null,
        comment_text: null,
        num_comments: 485,
        story_id: null,
        story_title: null,
        story_url: null,
        parent_id: null,
        created_at_i: 1487854868,
        relevancy_score: 7272,
        _tags: ['story', 'author_pfg', 'story_13713480'],
        objectID: '13713480',
        _highlightResult: {
          title: {
            value: 'Announcing the first SHA-1 collision',
            matchLevel: 'none',
            matchedWords: [],
          },
          url: {
            value:
              'https://security.googleblog.com/2017/02/announcing-first-sha1-collision.html',
            matchLevel: 'none',
            matchedWords: [],
          },
          author: {
            value: 'pfg',
            matchLevel: 'none',
            matchedWords: [],
          },
        },
      },
      {
        created_at: '2019-04-23T13:00:24.000Z',
        title: 'I Sell Onions on the Internet',
        url: 'https://www.deepsouthventures.com/i-sell-onions-on-the-internet/',
        author: 'eightturn',
        points: 3015,
        story_text: null,
        comment_text: null,
        num_comments: 435,
        story_id: null,
        story_title: null,
        story_url: null,
        parent_id: null,
        created_at_i: 1556024424,
        relevancy_score: 8791,
        _tags: ['story', 'author_eightturn', 'story_19728132'],
        objectID: '19728132',
        _highlightResult: {
          title: {
            value: 'I Sell Onions on the Internet',
            matchLevel: 'none',
            matchedWords: [],
          },
          url: {
            value:
              'https://www.deepsouthventures.com/i-sell-onions-on-the-internet/',
            matchLevel: 'none',
            matchedWords: [],
          },
          author: {
            value: 'eightturn',
            matchLevel: 'none',
            matchedWords: [],
          },
        },
      },
    ],
  },
}

let container
beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

const location = {
  page: {
    pageParam: '?page=1',
  },
}

const history = createMemoryHistory()

it('render the component with initial state passed from server', () => {
  const {findByText, getByText} = render(
    <AppContext.Provider value={store}>
      <BulletinFeed location={location} history={history} />
    </AppContext.Provider>,
    container,
  )
})
