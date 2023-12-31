import React, { useState, useEffect } from 'react';
import { userService } from '@service/userService'
import { useDispatch, useSelector } from 'react-redux';

import './user.css'

const User = () => {
    const [userNameState, setUserName] = useState('')
    const [lastNameState, setLastName] = useState('')
    const [firstNameState, setFirstName] = useState('')
    const userInfo = useSelector(state => state.Profile)

    const dispatch = useDispatch()

    useEffect(() => {
        userService.getProfile()
            .then(userData => {
                console.log(userData)
                dispatch({
                    type: "Profile/setUser",
                    payload: userData.body,
                })
                setLastName(userInfo.user.lastName)
                setFirstName(userInfo.user.firstName)
                setUserName(userInfo.user.userName)
            });
    }, [])

    let firstName = userInfo.user.firstName
    let lastName = userInfo.user.lastName

    const show = () => {
        document.querySelector('.updateForm').classList.toggle("hidden")
    }

    const handleInput = (e) => {
        e.preventDefault()
        dispatch({
                    type: "Profile/setUserName",
                    payload: e.target.value,
                })
        
    }

    const updateUserName = (e) => {
        e.preventDefault()
    }


    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{firstName} {lastName}</h1>

                <button onClick={show} className="edit-button">Edit Name</button>

                <form className='updateForm hidden'>
                    <div className="inputeUpdate input-username">
                        <label htmlFor="username">UserName</label>
                        <button onClick={updateUserName} className='majName'>X</button>
                        <input name='username' type="text" id="username" onChange={handleInput} value={userInfo.user.userName} />
                    </div>

                    {/* <div className="inputeUpdate input-lastname">
                        <label htmlFor="lastname">Last Name</label>
                        <input name="lastname" type="text" id="lastName"  value={lastNameState} disabled />
                    </div> */}

                    <div className="inputeUpdate input firstname">
                        <label htmlFor="firstname">First Name</label>
                        <input name='firstname' type="text" id="firstName"  value={firstNameState} disabled />
                    </div>
                </form>

            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </main>
    );
};

export default User;