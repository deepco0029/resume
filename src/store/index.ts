import modules from './modules'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import myLogger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createBrowserHistory } from 'history'
const customHistory = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware({
  context: {
    history: customHistory
  }
})
const store = createStore(modules.rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, myLogger)))
export default store
sagaMiddleware.run(modules.rootSagas)

export type RootState = ReturnType<typeof modules.rootReducer>
