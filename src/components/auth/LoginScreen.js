import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

    const [formValues, handleInputChange]  = useForm({
        email: 'nando@gmail.com',
        password: 123456
    })

    // Extrac form values and use it into JSX
    const {email, password} = formValues

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(email, password)
    }

    return (
        <div className=".auth__box-container">
            <h3 className="auth__title">Login</h3>
            <form onSubmit= {handleLogin}>
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
                >Login</button>


                <div className='auth__social-networks'>
                    <p>Login with social networks</p>

                    <div 
                    className="google-btn"
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
