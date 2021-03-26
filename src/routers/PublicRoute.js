

import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PublicRoute = ({
    usAuthenticate,
    component: Component,
    ...rest

}) => {

    return (
        <Route
            component={(props)=>(
                (usAuthenticate)
                    ? <Redirect to ='/'></Redirect>
                    : <Component {...props}></Component>
            )}

        ></Route>
    )
}
