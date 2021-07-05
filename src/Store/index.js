import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from "redux-saga"

import loginReducer from './Login/reducer'
import loginSaga from './Login/saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    loginReducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(loginSaga)

export default store