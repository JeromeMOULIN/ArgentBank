import React, { useState, useEffect } from 'react';
import getProfile from '@service/Profile'
import { useDispatch, useSelector } from 'react-redux';

import './user.css'

const User = () => {
    const [userNameState, setUserName] = useState('')
    const userInfo = useSelector(state => state)

    const dispatch = useDispatch()

    useEffect(() => {
        getProfile()
            .then(userData => {
                console.log(userData)
                dispatch({
                    type: "Profile/setUser",
                    payload: userData.body,
                })
            });
    }, [])

    let firstName = userInfo.Profile.user.firstName
    let LastName = userInfo.Profile.user.lastName
    let userName = userInfo.Profile.user.userName

    const show = () => {
        document.querySelector('.updateForm').classList.toggle("hidden")
    }

    const handleInput = (e) => {
        setUserName(e.target.value)
    }

    const updateUserName = (e) => {
        e.preventDefault()
    }


    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{firstName} {LastName}</h1>

                <button onClick={show} className="edit-button">Edit Name</button>

                <form className='updateForm hidden'>
                    <div className="inputeUpdate input-username">
                        <label htmlFor="username">UserName</label>
                        <button onClick={updateUserName} className='majName'>X</button>
                        <input name='username' type="text" id="username" onChange={handleInput} value={userNameState} />
                    </div>

                    <div className="inputeUpdate input-lastname">
                        <label htmlFor="lastname">Last Name</label>
                        <input name="lastname" type="text" id="lastname" onChange={handleInput} value={LastName}disabled/>
                    </div>

                    <div className="inputeUpdate input firstname">
                        <label htmlFor="firstname">First Name</label>
                        <input name='firstname' type="text" id="firstName" onChange={handleInput} value={firstName} disabled />
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