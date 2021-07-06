import {
    LOGIN_SUCCESS,
    LOGIN_START,
    LOGIN_FAIL
} from './actions'

import { delay, put, takeLatest } from 'redux-saga/effects'

function* login(action) {
    yield delay(2000)
    yield put({type: LOGIN_SUCCESS})
}

function* watchLogin() {
    yield takeLatest(LOGIN_START, login)
}

export default [ watchLogin() ]