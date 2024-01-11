import React, { useState, useEffect } from 'react';
import { userService } from '@service/userService'
import { useDispatch, useSelector } from 'react-redux';

import './user.css'
import Transaction from '@components/partials/Transaction';

const User = () => {
    const [load, setLoad] = useState(true)
    const userInfo = useSelector(state => state.Profile)

    const dispatch = useDispatch()

    useEffect(() => {
        userService.getProfile()
            .then(userData => {
                dispatch({
                    type: "Profile/setUser",
                    payload: userData.body,
                })
                setLoad(false)
            })
            .catch(err => console.log(err));
    }, [])

    let firstName = userInfo.user.firstName
    let lastName = userInfo.user.lastName
    let userName = userInfo.user.userName

    const show = (e) => {
        e.preventDefault()
        document.querySelector('.updateForm').classList.toggle("hidden")
        document.querySelector('#EditName').classList.toggle("hidden")
    }

    const handleInput = (e) => {
        e.preventDefault()
        dispatch({
            type: "Profile/setUserName",
            payload: e.target.value,
        })

    }

    const changeUserName = (e) => {
        e.preventDefault()
        let newUserName = document.querySelector('#username').value
        userService.changeUserName(newUserName)
            .then(
                dispatch({
                    type: "Profile/setUserName",
                    payload: newUserName,
                })
            ).catch(err => console.log(err))

    }

    if (load) {
        return <div>LOADING</div>
    }

    const transactions = [
        {
            "id": "1",
            "title": "Argent Bank Checking (x8349)",
            "amount": "$2,082.79",
            "description": "Available Balance"
        },
        {
            "id": "2",
            "title": "Argent Bank Savings (x6712)",
            "amount": "$10,928.42",
            "description": "Available Balance"
        },
        {
            "id": "3",
            "title": "Argent Bank Credit Card (x8349)",
            "amount": "$184.30",
            "description": "Current Balance"
        }
    ]

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{firstName} {lastName} {userName}</h1>

                <button onClick={show} id='EditName' className="edit-button">Edit Name</button>

                <form className='updateForm hidden'>
                    <div className="inputeUpdate input-username">
                        <label htmlFor="username">UserName</label>
                        <input name='username' type="text" id="username" onChange={handleInput} value={userInfo.user.userName} />
                    </div>

                    <div className="inputeUpdate input lastName">
                        <label htmlFor="lastName">Last Name</label>
                        <input name='lastNAme' type="text" id="lastName" value={userInfo.user.lastName} disabled />
                    </div>

                    <div className="inputeUpdate input firstname">
                        <label htmlFor="firstName">First Name</label>
                        <input name='firstname' type="text" id="firstName" value={userInfo.user.firstName} disabled />
                    </div>

                    <div className='UpdatingFormButtons'>
                        <button onClick={changeUserName} className='edit-button'>Save</button>
                        <button onClick={show} className='edit-button'>Cancel</button>
                    </div>
                </form>


            </div>
            <h2 className="sr-only">Accounts</h2>

            {
                transactions.map((transaction) => (
                    <Transaction
                        key={transaction.id}
                        id={transaction.id}
                        title={transaction.title}
                        amount={transaction.amount}
                        description={transaction.description}
                    />
                ))
            }
        </main>
    );
};

export default User;