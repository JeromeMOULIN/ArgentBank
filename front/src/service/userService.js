import Axios from "./callerService";

const getToken = async (dataForm) => {
    //fetch to receiv token
    console.log("Trying to connect.")

    const response = await Axios.post('user/login', dataForm);
    let result = response.data
    return result
}

const getProfile = async () => {
    const responseUser = await Axios.post('http://localhost:3001/api/v1/user/profile');
    let dataUser = responseUser.data

    return dataUser
}


export const userService = {
    getToken, getProfile
} 