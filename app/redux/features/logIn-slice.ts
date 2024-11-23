import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Auth, signOut, User } from 'firebase/auth'

type InitialState = {
  value: LogInType
}

type LogInType = {
  user: User | null
  errorCodes: { [key: string]: string }
}

const isErrorCodes = process.env.NEXT_PUBLIC_ERROR_CODES
  ? JSON.parse(process.env.NEXT_PUBLIC_ERROR_CODES)
  : {}

const initialState = {
  value: {
    user: typeof window !== 'undefined' ? localStorage?.getItem('user') : '',
    errorCodes: isErrorCodes,
  } as LogInType,
} as InitialState

const logIn = createSlice({
  name: 'logIn',
  initialState: initialState,
  reducers: {
    logOut(state, action: PayloadAction<Auth>) {
      signOut(action.payload)
    },
    // signUp(state, action: PayloadAction<string[]>){
    //     createUserWithEmailAndPassword()
    // }
  },
})

export const { logOut } = logIn.actions
export default logIn.reducer
