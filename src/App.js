import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  StaticRouter,
} from 'react-router-dom'
import Main from './containers/Main'
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

const AppRoutes = props => {
  return (
    <Switch>
      <Route
        path="/"
        component={routerProps => <Main {...props} {...routerProps} />}
      />
    </Switch>
  )
}

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
