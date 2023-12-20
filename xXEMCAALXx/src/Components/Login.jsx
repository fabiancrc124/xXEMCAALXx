import React, { useState } from 'react';
import "../styles/styles.css"
import useControl from '../hook/useControl';
import FormularioLogin from './FormularioLogin';
import Home from './Home';
const Login = () => {

    const {isLoggedIn} = useControl()

    return (
        <>
            {isLoggedIn == false ? <FormularioLogin />: <Home/> }        
            
        </>
    )
}

export default Login
