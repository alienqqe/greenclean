// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth/web-extension'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

export const firebaseConfig = {
  apiKey: 'AIzaSyCHBlABdPpSZLn9xYiEujdvrPbtl03gTPI',

  authDomain: 'greenclean-73a11.firebaseapp.com',

  databaseURL:
    'https://greenclean-73a11-default-rtdb.europe-west1.firebasedatabase.app',

  projectId: 'greenclean-73a11',

  storageBucket: 'greenclean-73a11.appspot.com',

  messagingSenderId: '570684011225',

  appId: '1:570684011225:web:7145b783e28898785284c8',
}

// Initialize Firebase

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
