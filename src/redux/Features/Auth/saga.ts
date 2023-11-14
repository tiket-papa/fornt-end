'use client'

import { takeLatest, put, call } from 'redux-saga/effects'
import { cekLoginSesion, loginFailure, loginRequest, loginSuccess, logout } from './slice'
import axios from '@/utilities/axois'
import { type ResponseAtributes } from '@/utilities/interface/responseInteface'

function * LoginSaga (action: { type: string, payload: { email: string, password: string } }) {
  try {
    const result: ResponseAtributes = yield call(axios.post, 'http://localhost:5000/api/v2/auth/login', {
      user_email: action.payload.email,
      password: action.payload.password
    })
    const accesToket = result.data.data.access_toket as string

    // if (action.payload.email !== 'test@test.com' || action.payload.password !== '12345') {
    //   yield put(loginFailure('login gagal'))
    // }
    // const accesToket = 'ajshdfgjkasrbc weoriyqpoiy1892734nmsdflk3459sufd[co58=3209485'
    const user = {
      uuid: 'e7efa8d3-54a7-49ea-881c-77ff774b43cf',
      name: 'babang tamvan',
      profile: '/Statick/fake/user-fake.png',
      role: 'userBasic'
    }
    const token = accesToket
    yield put(loginSuccess({ user, token }))
  } catch (error: any) {
    const responseErr: ResponseAtributes = error.response
    console.log(responseErr)
    yield put(loginFailure(responseErr.data.error_message))
  }
}

function * cekLoginSaga (action: { type: string }) {
  try {
    const result: ResponseAtributes = yield call(axios.get, 'http://localhost:5000/api/v2/auth/refress_token')

    const accesToket = result.data.data.access_toket as string
    const user = {
      uuid: 'e7efa8d3-54a7-49ea-881c-77ff774b43cf',
      name: 'babang tamvan',
      profile: '/Statick/fake/user-fake.png',
      role: 'userBasic'
    }
    const token = accesToket
    yield put(loginSuccess({ user, token }))
  } catch (error: any) {
    console.log(error)
    yield put(logout())
  }
}

export default function * wathcAuthSaga () {
  yield takeLatest(loginRequest.type, LoginSaga)
  yield takeLatest(cekLoginSesion.type, cekLoginSaga)
}
