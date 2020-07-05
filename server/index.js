import path from 'path'
import fs from 'fs'

import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {ServerStyleSheet} from 'styled-components'
import {StaticRouter} from 'react-router-dom'
import getNewsItems from '../src/services/hnApi'

import App from '../src/App'

const PORT = 8080
const app = express()
const sheet = new ServerStyleSheet()

const router = express.Router()

const serverRenderer = (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf8', async (err, data) => {
    const page = req.query.page || 1
    const newsItems = await getNewsItems(page)
    if (err) {
      console.error(err)
      return res.status(500).send('An error occurred')
    }
    const reactDom = renderToString(
      sheet.collectStyles(<App store={newsItems} location={req.url} />),
    )
    const styleTags = sheet.getStyleTags()
    console.log('from server', reactDom)
    return res.send(
      data
        .replace('<div id="root"></div>', `<div id="root">${reactDom}</div>`)
        .replace('__STATE__', JSON.stringify(newsItems))
        .replace('__STYLE_TAGS__', styleTags),
    )
  })
}
router.use('^/$', serverRenderer)
// router.use('^/$', (req, res, next) => {
//   res.send('Hello')
// })

router.use(
  express.static(path.resolve(__dirname, '..', 'build'), {maxAge: '30d'}),
)
app.use(router)
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
})
