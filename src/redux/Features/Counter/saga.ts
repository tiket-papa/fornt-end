import { takeEvery, select, call, put } from 'redux-saga/effects'
import { increment } from '..'
import { type RootState } from '@/redux/strore'

function * incrementSaga () {
  const counter: number = yield select((state: RootState) => state.counter.value)
  console.log(`counter ${counter}`)
}

function * counterSaga () {
  yield takeEvery(increment.type, incrementSaga)
}

export default counterSaga
