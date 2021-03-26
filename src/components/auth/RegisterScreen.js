import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import {useDispatch, useSelector} from 'react-redux'
import { removeError, setError } from '../../actions/ui'
import { startRegisterWithEmailPasswordName } from '../../actions/auth'


export const RegisterScreen = () => {

    const dispatch = useDispatch()
    const {msgError} =  useSelector(state => state.ui)

    const [registerForm, handleInputChange] = useForm({
        name : 'Jairo',
        email : 'jairo@gmail.com',
        password : '12344545',
        password2 : '12344545',
    })
    const { name, email, password, password2 } =  registerForm

    const handleSubmit = (e) =>{
        e.preventDefault()

        if (isFormValid()){
            
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        } 
    }

    const isFormValid = () =>{
        if(name.trim().length === 0){
            dispatch(setError('Name length is not correct'))
            return false
        }else if ( !validator.isEmail( email ) ){
            dispatch(setError('Not valid email'))
            return false
        }else if (password !== password2 || password.length < 5){
            dispatch(setError('Password should be at least 6 characteres and match each other'))
            return false
        }
        dispatch(removeError())
        return true
    }
    return (

        <div className=".auth__box-container">
            <h3 className="auth__title">Register</h3>
            <form onSubmit= {handleSubmit}>
                {
                    msgError &&
                    <div className="auth__alert-error">
                    {msgError}
                    </div>
                }
                <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    className='auth__input'
                    autoComplete='off'
                    value = {name}
                    onChange = {handleInputChange}
                    />
                <input
                    type='text'
                    placeholder='Email'
                    name='email'
                    className='auth__input'
                    autoComplete='off'
                    value = {email}
                    onChange = {handleInputChange}
                    />
                <input
                    type='password'
                    placeholder='Password'
                    className='auth__input'
                    name='password'
                    value = {password}
                    onChange = {handleInputChange}
                    />
                <input
                    type='password'
                    placeholder='Confirm Password'
                    name='password2'
                    className='auth__input'
                    value = {password2}
                    onChange = {handleInputChange}
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
