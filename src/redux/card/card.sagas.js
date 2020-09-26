import { call, put, all, takeLatest } from 'redux-saga/effects'

import userActionTypes from '../user/user.types'
import { clearCard } from './card.actions'

export function* clearCardOnSignOut() {
  yield put(clearCard())
}
export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCardOnSignOut)
}

export default function* cardSagas() {
  yield all([call(onSignOutSuccess)])
}
