import React from 'react'
import ReactDOM from 'react-dom'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import addApp from './reducer/index'
import { createStore,applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { helloSaga,watchIncrementAsync } from './sagas/index.js'
import routers from './router'
const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  addApp,
  applyMiddleware(sagaMiddleware,logger)
)
sagaMiddleware.run(helloSaga)
sagaMiddleware.run(watchIncrementAsync)
// const store = createStore(addApp)
const rootEl = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    {routers}
  </Provider>,
  rootEl
)




