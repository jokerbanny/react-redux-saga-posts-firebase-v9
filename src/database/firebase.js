import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCeG6CRTVjhg74BcxnZKMFHPqYu5RI6rBI',
  authDomain: 'redux-saga-post-fb9.firebaseapp.com',
  projectId: 'redux-saga-post-fb9',
  storageBucket: 'redux-saga-post-fb9.appspot.com',
  messagingSenderId: '250373445063',
  appId: '1:250373445063:web:28b1e1bc1ebcc71f34f5e2',
}

const app = initializeApp(firebaseConfig)

export default getFirestore(app)
