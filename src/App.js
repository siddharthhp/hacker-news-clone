import React from 'react'
import {BrowserRouter as Router, StaticRouter} from 'react-router-dom'
import AppRoutes from './routers/AppRouter'
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

const App = props => {
  JavascriptTimeAgo.addLocale(en)
  if (props.location) {
    return (
      <StaticRouter location={props.location}>
        <AppRoutes {...props} />
      </StaticRouter>
    )
  } else {
    return (
      <Router>
        <AppRoutes {...props} />
      </Router>
    )
  }
}

export default App
