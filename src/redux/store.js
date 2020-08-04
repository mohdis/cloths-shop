import {
    createStore,
    applyMiddleware
} from 'redux'
import combineReducers from './root-reducer'
import logger from 'redux-logger'

const middlewares = [logger]

const store = createStore(combineReducers, applyMiddleware(...middlewares))

export default store