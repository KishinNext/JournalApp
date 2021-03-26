import { types } from "../types/types"
import {firebase, googleAuthProvider} from '../firebase/firebase'
import { finishLoading, startLoading } from "./ui"
import Swal from 'sweetalert2'


export const startLoginEmailPassword = (email, password) =>{
    return async (dispatch) =>{
        dispatch(startLoading())
        try {
            const response = await  firebase.auth().signInWithEmailAndPassword(email, password)
            const user = response.user
            dispatch(login(user.uid, user.displayName))
            dispatch(finishLoading())
        } catch (error) {
            dispatch(finishLoading())
            Swal.fire('Error', error.message, 'error')
        }
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) =>{
    return async (dispatch) =>{
        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
            const user = response.user
            user.updateProfile({displayName: name})
            dispatch(login(user.uid, user.displayName))
        } catch (error) {
            Swal.fire('Error', error.message, 'error')
        }

    }
}

export const googleLogin = () =>{
    return async (dispatch)=>{
        try {
            const response = await firebase.auth().signInWithPopup(googleAuthProvider)
            const user = response.user
            dispatch(login(user.uid, user.displayName))
        } catch (error) {
            Swal.fire('Error', error.message, 'error')
        }

    }
}

export const login = (uid, displayName) =>({
    type: types.login,
    payload:{
        uid,
        displayName
    }
})

export const startLogout = () =>{
    return async (dispatch) =>{
        try {
            await firebase.auth().signOut()
            dispatch(logOut())
        } catch (error) {
            console.log(error)
        }
        

    }
}

export const logOut = () =>({
    type: types.logout
})