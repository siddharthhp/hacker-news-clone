import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Main from './containers/Main'

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/newsFeed" component={Main} />
        <Redirect to="/newsFeed" />
      </Switch>
    </Router>
  )
}
