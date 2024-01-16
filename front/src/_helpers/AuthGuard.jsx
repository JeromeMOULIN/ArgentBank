import React from 'react';
import User from '@pages/private/User.jsx'
import { Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';


const AuthGuard = () => {
    const Profile = useSelector(state => state.Profile)

    if (!Profile.connection.token) {
        return <Navigate to="/login"/>
    };
    return <User />
};

export default AuthGuard;