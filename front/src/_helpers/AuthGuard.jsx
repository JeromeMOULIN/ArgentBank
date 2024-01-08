import React from 'react';
import User from '@pages/private/User.jsx'
import { Navigate} from 'react-router-dom';


const AuthGuard = () => {

    console.log('try to redirect')
    if (!localStorage.getItem('token')) {
        console.log('redirect home')
        return <Navigate to="/login"/>
    };
    console.log('redirect user')
    return <User />
};

export default AuthGuard;