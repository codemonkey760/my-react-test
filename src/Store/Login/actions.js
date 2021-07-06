export const LOGIN_START = 'LOGIN_START'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const loginStart = (user_name, pass_word) => ({
    type: LOGIN_START,
    user_name,
    pass_word
})

export const loginFail = () => ({
    type: LOGIN_FAIL
})

export const loginSuccess = () => ({
    type: LOGIN_SUCCESS
})