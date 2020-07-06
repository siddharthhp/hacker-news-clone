import React from 'react'
import {hydrate} from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

let value = {}
if (window && window.__INITIAL_STATE__) {
  value = window.__INITIAL_STATE__
  delete window.__STATE__
}

hydrate(<App store={value} />, document.getElementById('root'))

serviceWorker.register()
