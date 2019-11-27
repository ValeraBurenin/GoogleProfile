import React from 'react'
import { Link } from 'react-router-dom'
import { LANDING_PAGE_PATH } from '@/constants'
import NotFound from './styles'

export default () => (
  <NotFound>
    Страница не найдена. Вернуться на <Link to={LANDING_PAGE_PATH}>главную</Link>?
  </NotFound>
)
