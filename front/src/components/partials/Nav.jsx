import { useDispatch, useSelector } from 'react-redux';
import { accountService } from '@/service/accountService';
import { userService } from '@/service/userService';
import './nav.css'
import { useEffect } from 'react';



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
        console.log('hello')
    }, [])

    if (accountService.isLogged()) {
        btnNav =
            <div>
                <a className="main-nav-item" href="user">
                    <i className="fa fa-user-circle"></i>
                    {UserInfo.user.userName} |
                </a>

                <a onClick={accountService.logOut} href='/'>
                    LogOut
                </a>
            </div>
    } else {
        btnNav =
            <div>
                <a className="main-nav-item" href="user">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </a>
            </div>
    }



    return (
        <nav className="main-nav">

            <a className="main-nav-logo" href="/">
                <img
                    className="main-nav-logo-image"
                    src="src/assets/img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>

            {btnNav}

        </nav>
    );
};

export default Nav;