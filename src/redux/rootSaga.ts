import { all, fork } from 'redux-saga/effects'
import counterSaga from './Features/Counter/saga'

export default function * rootSaga () {
  yield all([
    fork(counterSaga)
  ])
}
