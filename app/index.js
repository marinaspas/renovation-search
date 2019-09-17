import {createHashHistory} from 'history'
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, useRouterHistory, Link} from 'react-router'
import AppLayout from './layouts/AppLayout'
import Companies from './components/Companies'
import CompanyProfile from './components/CompanyProfile'

var appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDOM.render((
  <Router history={appHistory}>
    <Route path="/" component={AppLayout}>
      <IndexRoute component={Companies} />
      <Route path="/profile/:id" component={CompanyProfile} />
    </Route>
  </Router>
), document.getElementById('root'))