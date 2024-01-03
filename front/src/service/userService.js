import Axios from "./callerService";

const getToken = async (dataForm) => {
    console.log("Trying to connect.")

    const response = await Axios.post('/user/login', dataForm);
    let result = response.data
    return result
}

const getProfile = async () => {
    const responseUser = await Axios.post('/user/profile');
    let dataUser = responseUser.data

    return dataUser
}

const changeUserName = async (newUserName) => {
    const responseChange = await Axios.put('/user/profile',{userName: newUserName});
}


export const userService = {
    getToken, getProfile, changeUserName
} 