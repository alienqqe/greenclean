'use client'
import React, { useEffect, useState } from 'react'
import '../styles/logIn.scss'
import { auth } from '../firebase'
import {
  signInWithPopup,
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import { FirebaseError } from 'firebase/app'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const LogInPage = () => {
  const errorCodes = useSelector(
    (state: RootState) => state.logIn.value.errorCodes
  )

  const [isError, setIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [user, setUser] = useState<User | null>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const googleAuth = new GoogleAuthProvider()
  const router = useRouter()

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  const googleLogIn = async () => {
    const result = await signInWithPopup(auth, googleAuth)
    router.push('/')
    setUser(result.user)
  }

  const emailLogIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      setUser(userCredential.user)
      router.push('/')
    } catch (error) {
      console.log(error)
      if (error instanceof FirebaseError) {
        const code = error.code
        const errorMessage = errorCodes[code]

        if (errorMessage) {
          setIsError(true)
          setErrorMsg(errorMessage)
        } else {
          setIsError(true)
          setErrorMsg('Unknown error')
        }
      } else {
        setIsError(true)
        setErrorMsg('Unknown error')
      }
    }
  }

  // TODO: replace alerting error with dispaying it in the UI
  return (
    <div className='logIn-container '>
      <div className='logIn-field text-center shadow p-3 d-block'>
        <form onSubmit={emailLogIn}>
          <h4 className='pb-1'>Log In</h4>
          <div className='py-3 d-flex  align-items-center justify-content-center'>
            <input
              className='d-inline-block ms-1'
              placeholder='Enter your email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='text'
              required
            />
          </div>

          <div className='password-container py-3 d-flex align-items-center justify-content-center'>
            <input
              className='d-inline-block ms-1'
              placeholder='Password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {isError ? (
            <div className='errorContainer  text-start pb-0'>
              <p className='ms-2'>{errorMsg}</p>
            </div>
          ) : (
            ''
          )}
          <button className='logIn-button btn mt-4 btn-primary btn-lg d-bloc m-auto w-50 text-center'>
            Log in
          </button>
        </form>

        <hr />
        <button onClick={googleLogIn} className='googleButton btn btn-light'>
          <FcGoogle />
        </button>

        <p className='mt-2'>
          Already have an account? <Link href='/signIn'>Sign In</Link>
        </p>
      </div>
    </div>
  )
}

export default LogInPage
