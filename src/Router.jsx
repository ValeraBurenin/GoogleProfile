import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LANDING_PAGE_PATH } from '@/constants'

import withSecure from '@/components/wrappers/withSecure'
import Landing from '@/components/pages/landing'
import NotFound from '@/components/pages/NotFound'

export default () => (
  <Router>
    <Switch>
      <Route path={LANDING_PAGE_PATH} component={withSecure(Landing)} exact />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
)
