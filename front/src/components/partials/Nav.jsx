import { useDispatch, useSelector } from 'react-redux';
import { userService } from '@/service/userService';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

import './nav.css'


const Nav = () => {

    const UserInfo = useSelector(state => state.Profile)
    const dispatch = useDispatch()
    let btnNav = '';
    
    useEffect(() => {
        userService.getProfile()
            .then(userData => {
                dispatch({
                    type: "Profile/setUser",
                    payload: userData.body,
                })
            });
    }, [])

    const logout = () => {
        dispatch({ type: 'Profile/setLogin', payload: ''})
        Navigate('/')
    }

    if (UserInfo.connection.isLogged === true) {
        btnNav =
            <div>
                <Link to='user' className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    {UserInfo.user.userName} |
                </Link>

                <Link to='/' onClick={logout}>
                    LogOut
                </Link>
            </div>
    } else {
        btnNav =
            <div>
                <Link to='user' className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </div>
    }



    return (
        <nav className="main-nav">

            <Link to={'/'} className="main-nav-logo" >
                <img
                    className="main-nav-logo-image"
                    src="src/assets/img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>

            {btnNav}

        </nav>
    );
};

export default Nav;