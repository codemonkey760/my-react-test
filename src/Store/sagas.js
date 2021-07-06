import { all } from 'redux-saga/effects'

import loginSagas from './Login/sagas'

export function* startSagas() {
    yield all([
        ...loginSagas
    ])
}