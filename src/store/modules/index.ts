import { combineReducers } from 'redux'
import { combineSagas } from '@/store/lib'

import resume from './resume'

export default {
  rootReducer: combineReducers({ resume: resume.reducer }),
  rootSagas: combineSagas({ resume: resume.saga })
}
