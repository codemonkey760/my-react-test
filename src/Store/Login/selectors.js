import get from 'lodash/get'

export const getLoginSuccess = (state) => (
    get(state, 'login.success', false)
)

export const getLoggingIn = (state) => (
    get(state, 'login.logging_in', false)
)

export const getToken = (state) => (
    get(state, 'login.token', undefined)
)

export const getRefreshToken = (state) => (
    get(state, 'login.refresh_state', undefined)
)