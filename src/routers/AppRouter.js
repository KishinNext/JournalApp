import React, {useEffect, useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import {firebase} from '../firebase/firebase'
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { loadNotes } from '../helpers/loadNotes';
import { setNote, startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch()

    const [checking, setChecking] = useState(true)

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged( async (user) =>{
            if(user?.uid){
                dispatch( login(user.uid, user.displayName) )
                setIsLoggedIn(true)
                
                dispatch( startLoadingNotes(user.uid) )
            }else{
                setIsLoggedIn(false)

            }
            setChecking(false)
        } )
        
    }, [dispatch, setIsLoggedIn, setChecking])

    //Loading Screen
    if(checking){
        return(
            <h1>Wait...</h1>
        )
    }


    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute   path='/auth' usAuthenticate={isLoggedIn} component={AuthRouter}> </PublicRoute>
                    <PrivateRoute exact path='/' usAuthenticate={isLoggedIn} component={JournalScreen}> </PrivateRoute>
                    <Route  path="/auth" component={AuthRouter}></Route >
                    {/* <Route  exact path="/" component={JournalScreen}></Route > */}
                    <Redirect to="/auth/login"></Redirect>
                </Switch>

            </div>
        </Router>
    )
}
