import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import { createBrowserHistory } from 'history'
import store from './store'
const customHistory = createBrowserHistory()

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Router history={customHistory}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  rootElement
)
