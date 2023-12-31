import axios from "axios";

const getToken = async (dataForm) => {
    //fetch to receiv token
    console.log("Trying to connect.")

    const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: dataForm,
    });
    let result = await response.json()
    return result
}

//recuperation profile
const getProfile = async () => {
    const responseUser = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
            'Authorization': "Bearer " + localStorage.getItem('token'),
        },
    });

    let dataUser = await responseUser.json()

    return dataUser
}


export const userService = {
    getToken, getProfile 
} 