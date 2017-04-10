import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router'
import AppLayout from './layouts/AppLayout'
import Companies from './components/Companies'
import CompanyProfile from './components/CompanyProfile'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={AppLayout}>
      <IndexRoute component={Companies} />
      <Route path="/profile/:id" component={CompanyProfile} />
    </Route>
  </Router>
), document.getElementById('root'))