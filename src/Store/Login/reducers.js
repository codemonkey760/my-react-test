export const initialState = {
    login: {
        logging_in: false,
        success: false,
        token: undefined,
        refresh_token: undefined,
    }
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                ...state,
                login: {
                    ...state.login,
                    logging_in: true,
                    success: false,
                },
            }
        case 'LOGIN_SUCCESSFUL':
            return {
                ...state,
                login: {
                    ...state.login,
                    logging_in: false,
                    success: true,
                }
            }
        case 'LOGIN_FAILED':
            return {
                ...state,
                login: {
                    ...state.login,
                    logging_in: false,
                    success: false,
                },
            }
        default:
            return state
    }
}

export default login