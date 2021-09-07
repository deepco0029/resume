import { Intoroduce, Careers, Projects } from './types'
import { createAsyncActionType, createActionEntity, createCustomReducer } from '@/store/lib'

interface IResume {
  introduce: Intoroduce
  career: Careers
  project: Projects
}
export interface IRequest {}
export interface IError {
  message: string
}
const FETCH = createAsyncActionType('resume/FETCH')
export const fetch = createActionEntity<IRequest, IResume, IError>(FETCH)

const actions = { fetch }
const state = { data: {} as IResume, message: '' }

const reducer = createCustomReducer(state, actions)
  .handleAction(fetch.success, (state, action) => {
    return { ...state, data: action.payload }
  })
  .handleAction(fetch.failure, (state, action) => {
    return { ...state, message: action.payload.message }
  })

export default reducer
