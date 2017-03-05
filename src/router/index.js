import App from '../containers/index'
import { Router, Route, browserHistory } from 'react-router'
import React from 'react'

export default (
<Router history={browserHistory}>
  <Route path="/" component={App}>
  </Route>
</Router>
)