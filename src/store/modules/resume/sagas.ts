import { takeEvery } from 'redux-saga/effects'

import { getAPI_Resume } from '@/api/resume'
import { createAsyncSaga } from '@/store/lib'
import { fetch } from './reducer'

const asyncFetchSaga = createAsyncSaga(fetch, getAPI_Resume)

export default [takeEvery(fetch.request, asyncFetchSaga)]
