

import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({
    usAuthenticate,
    component: Component,
    ...rest

}) => {

    return (
        <Route
            component={(props)=>(
                (usAuthenticate)
                    ?<Component {...props}></Component>
                    :<Redirect to ='/auth/login'></Redirect>
            )}

        ></Route>
    )
}
