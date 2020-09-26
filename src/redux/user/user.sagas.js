import { put, all, call, takeLatest } from 'redux-saga/effects'
import {
  googleProvider,
  auth,
  createUserDocument,
  checkCurrentUser,
} from '../../firebase/firebase.utils'

import userActionTypes from './user.types'

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
} from './user.actions'

export function* userSnapshotSignIn(user) {
  try {
    const userRef = yield call(createUserDocument, user)
    const userSnapshot = yield userRef.get()
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* googleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    yield userSnapshotSignIn(user)
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* emailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    yield userSnapshotSignIn(user)
  } catch (error) {
    put(signInFailure(error))
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield checkCurrentUser()
    if (!userAuth) return
    yield userSnapshotSignIn(userAuth)
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* signOutUser() {
  try {
    yield auth.signOut()
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailure(error))
  }
}

export function* signUpUser({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password)
    yield call(createUserDocument, user, { displayName })
    yield put(signUpSuccess({ email, password }))
  } catch (error) {
    yield put(signUpFailure(error))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, googleSignIn)
}
export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, emailSignIn)
}
export function* onCheckUserSesstion() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSTION, isUserAuthenticated)
}
export function* onSignOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOutUser)
}
export function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUpUser)
}
export function* onSignUpSuccess() {
  yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, emailSignIn)
}
export default function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignOutStart),
    call(onCheckUserSesstion),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ])
}
