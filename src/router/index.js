import Count from '../containers/count'
import Todo from '../containers/todo'
import { Router, Route, browserHistory } from 'react-router'
import React from 'react'

export default (
<Router history={browserHistory}>
  <Route path="/" component={Count} />
  <Route path="/todomvc" component={Todo} />
</Router>
)