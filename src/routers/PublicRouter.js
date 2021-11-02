import Cookies from 'js-cookie';
import React from 'react'
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router'
// import {useSelector} from 'react-redux'

function PublicRoute({ component: Component, ...rest }) {

    // const {isAuth} = useSelector(state => state.authReducer)
    const token = Cookies.get('sheToken');

    return (
        <Route
            {...rest}
            render = {(props) => (
                token  ? <Redirect to="/"/> : <Component {...props}/>
            )}
        />
    )
}

export default PublicRoute
