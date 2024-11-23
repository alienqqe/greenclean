'use client'
import {
  User,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import '../styles/signIn.scss'
import { FcGoogle } from 'react-icons/fc'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { FirebaseError } from 'firebase/app'

const SignInPage = () => {
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

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    try {
      // Sign in with email and password in firebase auth service
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      router.push('/')
      // The signed-in user info
      setUser(userCredential.user)
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
        <form onSubmit={handleSubmit}>
          <h4 className='pb-1'>Sign In</h4>
          <div className='py-3 d-flex align-items-center justify-content-center'>
            <input
              className='d-inline-block ms-1'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='text'
              required
            />
          </div>

          <div className='password-container py-3 d-flex align-items-center justify-content-center'>
            <input
              className='d-inline-block ms-1'
              type='password'
              placeholder='Password'
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
          <button className='logIn-button btn mt-2 btn-primary btn-lg d-bloc m-auto w-50 text-center'>
            Sign in
          </button>
        </form>

        <hr />
        <button onClick={googleLogIn} className='googleButton btn btn-light'>
          <FcGoogle />
        </button>

        <p className='mt-2'>
          Dont have an account? <Link href='/log-in'>Log In</Link>
        </p>
      </div>
    </div>
  )
}

export default SignInPage
