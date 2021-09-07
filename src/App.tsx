import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from '@/components/Layout/Layout'
import routes from '@/routes'

const App = () => {
  return (
    <Layout>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
        ))}
      </Switch>
    </Layout>
  )
}

export default App
