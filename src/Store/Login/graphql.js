import gql from 'graphql-tag'

export const loginWithPassWord = gql`
    query($user_name: String!, $pass_word: String!) {
        loginWithPassWord(user_name: $user_name, pass_word: $pass_word) {
            token
            refresh_token
        }
    }
`