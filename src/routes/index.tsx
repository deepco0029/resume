import React from 'react'
import { Resume } from '@/pages'
import { Redirect } from 'react-router'

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to='/resume' />
  },
  {
    path: '/resume',
    component: () => <Resume />
  }
]

export default routes
