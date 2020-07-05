import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

const initialState = global.window && global.window.__INITIAL_STATE__

ReactDOM.hydrate(<App store={initialState} />, document.getElementById('root'))

serviceWorker.register()
