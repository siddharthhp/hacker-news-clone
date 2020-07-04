import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Main from './containers/Main'
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

export const App = () => {
  JavascriptTimeAgo.addLocale(en)
  return (
    <Router>
      <Switch>
        <Route path="/newsFeed" component={Main} />
        <Redirect to="/newsFeed" />
      </Switch>
    </Router>
  )
}
