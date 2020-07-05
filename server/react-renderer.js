const React = require('react')
const renderToString = require('react-dom/server').renderToString
const matchPath = require('react-router').matchPath
const path = require('path')
const fs = require('fs')
const ServerStyleSheet = require('styled-components').ServerStyleSheet

const App = require('../src/App').default
const getNewsItems = require('../src/services/hnApi').default
const sheet = new ServerStyleSheet()

exports = module.exports

exports.render = routes => {
  return async (req, res, next) => {
    var match = routes.find(route =>
      matchPath(req.path, {
        path: route,
        exact: true,
      }),
    )
    const store = await getNewsItems(1)

    const is404 = req._possible404

    if (match || is404) {
      const filePath = path.resolve(__dirname, '..', 'build', 'index.html')

      fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
          console.error('err', err)
          return res.status(404).end()
        }

        const location = req.url

        if (is404) {
          res.writeHead(404, {'Content-Type': 'text/html'})
          console.log(`SSR of unrouted path ${req.path} (404 ahead)`)
        } else {
          res.writeHead(200, {'Content-Type': 'text/html'})
          console.log(`SSR of ${req.path}`)
        }
        const jsx = <App store={store} location={location} />
        const reactDom = renderToString(sheet.collectStyles(jsx))
        const styleTags = sheet.getStyleTags()
        return res.end(
          htmlData
            .replace(
              '<div id="root"></div>',
              `<div id="root">${reactDom}</div>`,
            )
            .replace('__STATE__', JSON.stringify(store))
            .replace('__STYLE_TAGS__', styleTags),
        )
      })
    } else {
      req._possible404 = true
      return next()
    }
  }
}
