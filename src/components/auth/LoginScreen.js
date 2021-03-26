import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import {useDispatch, useSelector} from 'react-redux'
import { googleLogin, startLoginEmailPassword } from '../../actions/auth'
import validator from 'validator'
import { removeError, setError } from '../../actions/ui'


export const LoginScreen = () => {

    const dispatch = useDispatch()
    const {msgError, loading} = useSelector(state => state.ui)


    const [formValues, handleInputChange]  = useForm({
        email: 'jairo@gmail.com',
        password: '12344545'
    })

    // Extrac form values and use it into JSX
    const {email, password} = formValues

    const handleLogin = (e) => {
        e.preventDefault()
        if (verifyLogin()){
            dispatch(startLoginEmailPassword(email, password))  
        }

    }

    const verifyLogin = () =>{
        if (!validator.isEmail(email)){
            dispatch(setError('Not Valid Login Email'))
            return false
        } else if (password.length < 5 ){
            dispatch(setError('Password should be at least 6 characteres'))
        }
        dispatch(removeError())
        return true 
    }


    const handleGoogleLogin = () =>{
        dispatch(googleLogin())
    }

    return (
        <div className=".auth__box-container">
            <h3 className="auth__title">Login</h3>

            <form onSubmit= {handleLogin}>
                {
                    msgError &&
                    <div className="auth__alert-error">
                    {msgError}
                    </div>
                }
                <input
                    type='text'
                    placeholder='Email'
                    name='email'                // Necessesary value to use Form!!
                    className='auth__input'
                    autoComplete='off'
                    value = { email }           // Necessesary value to use Form!!
                    onChange = { handleInputChange } // Necessesary value to use Form!!
                    />
                <input
                    type='password'
                    placeholder='Password'
                    name='password'             // Necessesary value to use Form!!
                    className='auth__input'
                    value = { password }        // Necessesary value to use Form!!
                    onChange = { handleInputChange } // Necessesary value to use Form!!
                />
                <button 
                    type='submit'
                    className='btn btn-primary btn-block'
                    disabled= {loading}
                >Login</button>


                <div className='auth__social-networks'>
                    <p>Login with social networks</p>

                    <div 
                    className="google-btn"
                    onClick = {handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link to={'/auth/register'} className='link'>
                    Create New Account
                </Link>
            </form>
        </div>
    )
}
