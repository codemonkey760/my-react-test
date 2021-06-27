import { useState } from 'react'
import { useSnackbar } from 'react-simple-snackbar'

import { Page, PageHeader, TagLine, StyledLoginForm } from './styles'

const LogIn = () => {
    const [userName, setUserName] = useState('username')
    const [passWord, setPassWord] = useState('password')

    const updateUserName = (event) => {
        setUserName(event.target.value)
    }

    const updatePassword = (event) => {
        setPassWord(event.target.value)
    }

    const [ openSnackbar ] = useSnackbar(
        {
            position: 'top-center',
            style: {
                textAlign: 'center'
            }
        }
    )
    const submit = (event) => {
        event.preventDefault()

        openSnackbar(JSON.stringify({userName, passWord}), 2000)
    }

    return (
        <Page>
            <PageHeader>Login</PageHeader>
            <TagLine>To access your account</TagLine>
            <StyledLoginForm>
                <form onSubmit={submit}>
                    <label>UserName: <input
                        name="username"
                        type="text"
                        value={userName}
                        onChange={updateUserName}
                    /></label>
                    <label>Password: <input
                        name="password"
                        type="password"
                        value={passWord}
                        onChange={updatePassword}
                    /></label>
                    <input type="submit" value="Log In"/>
                </form>
            </StyledLoginForm>
        </Page>
    )
}

export { LogIn }