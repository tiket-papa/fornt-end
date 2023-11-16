import { all, fork } from 'redux-saga/effects'
import counterSaga from './Features/Counter/saga'
import authSaga from './Features/Auth/saga'

export default function * rootSaga () {
  yield all([
    fork(counterSaga),
    fork(authSaga)
  ])
}
