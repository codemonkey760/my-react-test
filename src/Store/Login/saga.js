import { delay, put, takeLatest } from 'redux-saga/effects'

function* login(action) {
    yield delay(2000)
    yield put({type: "LOGIN_SUCCESS"})
}

function* loginSaga() {
    yield takeLatest("LOGIN_START", login)
}

export default loginSaga
