import React from 'react'
import ReactDOM from 'react-dom'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import addApp from './reducer/index'
import { createStore,applyMiddleware } from 'redux'
import App from './containers/index'
const logger = createLogger()
const store = createStore(
  addApp,
  applyMiddleware(logger)
)
// const store = createStore(addApp)
const rootEl = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
)




