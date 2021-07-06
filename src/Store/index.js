import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from "redux-saga"

import loginReducer from './Login/reducers'
import { startSagas } from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    loginReducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(startSagas)

export { store }