import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Main from '../containers/Main'
import AppContext from '../context/appState'

const NoMatchPage = () => {
  return (
    <h2>
      Oops! The page you are looking for does not exist...Please go back to home{' '}
      <a href="/"> here</a>
    </h2>
  )
}

const AppRoutes = props => {
  return (
    <AppContext.Provider value={{...props}}>
      <Switch>
        <Route
          path="/"
          component={routerProps => <Main {...routerProps} />}
          exact
        />
        <Route component={NoMatchPage} />
      </Switch>
    </AppContext.Provider>
  )
}

export default AppRoutes
