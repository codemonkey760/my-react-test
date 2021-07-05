function login(state = {}, action) {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                logging_in: true
            }
        case 'LOGIN_SUCCESSFUL':
            return {
                logging_in: false,
                success: true,
                token: state.login.token,
                refresh_token: state.login.refresh_token
            }
        case 'LOGIN_FAILED':
            return {
                logging_in: false,
                success: false,
            }
        default:
            return state
    }
}

export default login