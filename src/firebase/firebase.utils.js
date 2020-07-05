import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
  apiKey: 'AIzaSyCSmM7DBid97eghmQ0CqrioBrn3qF4Xxpk',
  authDomain: 'cloths-shop.firebaseapp.com',
  databaseURL: 'https://cloths-shop.firebaseio.com',
  projectId: 'cloths-shop',
  storageBucket: 'cloths-shop.appspot.com',
  messagingSenderId: '393920039588',
  appId: '1:393920039588:web:cb821c5c41811abe4bb431',
  measurementId: 'G-391QFYSF5Z',
}

firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account',
})
export const createUserDocument = async (userAuth, ...otherParameters) => {
  if (!userAuth) return

  const docRefrence = await firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await docRefrence.get()
  console.log(snapshot)
  if (!snapshot.exits) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await docRefrence.set({
        displayName,
        email,
        createdAt,
        ...otherParameters,
      })
    } catch (error) {
      console.log(error)
    }
    return docRefrence
  }
}
export const googleAuthSignin = () => auth.signInWithPopup(provider)
export default firebase
