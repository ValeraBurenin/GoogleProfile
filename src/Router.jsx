import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LANDING_PAGE_PATH } from '@/constants'

import withSecure from '@/components/wrappers/withSecure'
import Layout from '@/components/pages/landing'
import NotFound from '@/components/pages/NotFound'

export default () => (
  <Router>
    <Switch>
      <Route path={LANDING_PAGE_PATH} component={withSecure(Layout)} exact />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
)
