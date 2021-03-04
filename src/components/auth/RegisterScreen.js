import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (

        <div className=".auth__box-container">
            <h3 className="auth__title">Register</h3>
            <form>
                <input
                    type='text'
                    placeholder='Name'
                    name='Name'
                    className='auth__input'
                    autoComplete='off'
                    />
                <input
                    type='password'
                    placeholder='Password'
                    className='auth__input'
                    name='Password'
                    />
                <input
                    type='password'
                    placeholder='Confirm Password'
                    name='Password2'
                    className='auth__input'
                />
                <button 
                    type='submit'
                    className='btn btn-primary btn-block mb-5'

                >Login</button>


                <Link to={'/auth/login'} className='link mt-1'>
                    Already Register?
                </Link>
            </form>
        </div>

    )
}
