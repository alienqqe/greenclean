'use client'
import Link from 'next/link'
import React from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'

const Navbar = () => {
  // const state = useAppSelector((state) => state.logIn)
  // const dispatch = useDispatch<AppDispatch>()

  const user = JSON.parse(localStorage.getItem('user') as string)
  console.log(user)

  // const dispatchLogOut = dispatch(logOut(auth))

  const handleLogOut = () => {
    if (confirm('Do you want to log out?')) {
      signOut(auth)
        .then(() => {
          localStorage.removeItem('user')
          alert('Sigh out succesful')
          window.location.reload()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          Navbar
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Link
              </a>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Dropdown
              </a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Action
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Another action
                  </a>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className=''>
            {user ? (
              <div className='d-lg-flex align-items-lg-center justify-content-lg-center'>
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    id='navbarDropdown'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    {' '}
                    <img
                      src={
                        user.photoURL
                          ? user.photoURL
                          : 'https://lh3.googleusercontent.com/a/ACg8ocJ2MJ-npSW6ENVLiHhUbcb__EIEfVY9iTQ3ZmX4VsKX1J5F3oh0=s96-c'
                      }
                      width={40}
                      height={40}
                      alt='Image'
                    ></img>
                  </a>
                  <ul
                    className='dropdown-menu dropdown-menu-end'
                    aria-labelledby='navbarDropdown'
                  >
                    <li>
                      <a className='dropdown-item' href='#'>
                        Action
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>
                    <li>
                      <a href='#' className='dropdown-item'>
                        <button
                          className='me-2 btn btn-outline-success'
                          onClick={handleLogOut}
                        >
                          Log Out
                        </button>{' '}
                      </a>
                    </li>
                  </ul>
                </li>
              </div>
            ) : (
              <div>
                <Link href='/log-in'>
                  <button
                    className='btn btn-sm me-3 btn-outline-success'
                    type='submit'
                  >
                    Log In
                  </button>
                </Link>
                <Link href='/signIn'>
                  <button className='btn btn-outline-success' type='submit'>
                    Sign In
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
