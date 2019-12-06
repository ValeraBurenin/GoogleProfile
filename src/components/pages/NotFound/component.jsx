import React from 'react'
import { Link } from 'react-router-dom'
import { LANDING_PAGE_PATH } from '@/constants'
import NotFound from './styles'

export default () => (
  <NotFound>
    Page not found. Back to <Link to={LANDING_PAGE_PATH}>home</Link>?
  </NotFound>
)
