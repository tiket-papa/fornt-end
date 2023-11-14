'use client'

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface UserAtributes {
  uuid: string
  name: string
  profile: string
  // role: 'userBasic' | 'userWisata' | 'admin'
  role: string
  // ... tambahkan properti lainnya sesuai kebutuhan
}

interface AuthState {
  user: UserAtributes | null
  loading: boolean
  error: string | null
  token: string | null
  isTokenExpired: boolean
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  token: null,
  isTokenExpired: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state, action: PayloadAction<{ email: string, password: string }>) => {
      state.loading = true
    },
    loginSuccess: (state, action: PayloadAction<{ user: UserAtributes, token: string }>) => {
      state.loading = false
      state.user = action.payload.user
      state.token = action.payload.token
      state.error = null
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.user = null
      state.token = null
      state.error = action.payload
    },
    cekLoginSesion (state) {
      state.loading = false
    },
    logout: (state) => {
      state.user = null
      state.token = null
      state.error = null
    }
  }
})

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  cekLoginSesion,
  logout
} = authSlice.actions
export default authSlice.reducer
