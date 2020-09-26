import { takeLatest, call, put, all } from 'redux-saga/effects'

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'

import {
  fetchingCollectionsSuccess,
  fetchingCollectionsFailure,
} from './shop.actions'

import shopActionTypes from './shop.types'

export function* fetchingCollectionsAsync() {
  try {
    const collectionsRef = firestore.collection('collections')
    const snapshot = yield collectionsRef.get()
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    yield put(fetchingCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchingCollectionsFailure(error.message))
  }
}

export function* fetchingCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FECHING_COLLECTIONS_START,
    fetchingCollectionsAsync
  )
}
export default function* shopSagas() {
  yield all([call(fetchingCollectionsStart)])
}
