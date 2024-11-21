import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const apiKey = process.env.API_KEY

export const firebaseConfig = {
  apiKey: apiKey,

  authDomain: 'greenclean-73a11.firebaseapp.com',

  databaseURL:
    'https://greenclean-73a11-default-rtdb.europe-west1.firebasedatabase.app',

  projectId: 'greenclean-73a11',

  storageBucket: 'greenclean-73a11.appspot.com',

  messagingSenderId: '570684011225',

  appId: '1:570684011225:web:7145b783e28898785284c8',
}

export const app = initializeApp(firebaseConfig)
export const googleAuthProvider = new GoogleAuthProvider()

export const db = getDatabase(app)
