/* eslint-disable react/prop-types */
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

const AppRoutes = ({store}) => {
  return (
    <Switch>
      <Route path="/newsFeed" component={() => <Main store={store} />} />
      <Redirect to="/newsFeed" />
    </Switch>
  )
}

const App = props => {
  JavascriptTimeAgo.addLocale(en)
  if (props.location) {
    return (
      <StaticRouter location={props.location}>
        <AppRoutes store={props.store} />
      </StaticRouter>
    )
  } else {
    return (
      <Router>
        <AppRoutes store={props.store} />
      </Router>
    )
  }
}

export default App
