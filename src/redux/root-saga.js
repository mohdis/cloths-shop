import { all, call } from 'redux-saga/effects'

import userSagas from './user/user.sagas'
import cardSagas from './card/card.sagas'
import shopSagas from './shop/shop.sagas'

export default function* rootSaga() {
  yield all([call(userSagas), call(cardSagas), call(shopSagas)])
}
