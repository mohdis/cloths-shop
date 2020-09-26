import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import persistReducer from './root-reducer'
import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [logger, sagaMiddleware]

export const store = createStore(
  persistReducer,
  applyMiddleware(...middlewares)
)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
