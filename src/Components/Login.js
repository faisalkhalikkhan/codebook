import { Button } from '@material-ui/core'
import React from 'react'
import '../CssOfComponents/Login.css'
import logo from '../default.png'
import {auth, provider} from '../firebase'
import {actionType} from '../HelperTool/reducer'
import { useDataLayerValue } from '../HelperTool/DataLayer'

function Login() {

    const [state, dispatch] = useDataLayerValue();
    const login = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionType.SET_USER,
                user: result.user
            })
            console.log(result.user);
        })
        .catch(error => {
            alert(error.message)
        })
    }
    return (
        <div className="login">
            <img src={logo} alt="Logo" />
            <Button type="submit" onClick={login} className="login__button">Login</Button>
        </div>
    )
}

export default Login
