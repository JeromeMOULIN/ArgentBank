import axios from 'axios'
import { mainStore } from '@components/redux/UserSlice';

const Axios = axios.create({
    baseURL: 'http://localhost:3001/api/v1'
})


// Token interceptor
Axios.interceptors.request.use(request => {
    let loggedState = mainStore.getState().Profile.connection.islogged
    let token = mainStore.getState().Profile.connection.token

    if (loggedState = true) {
        request.headers.Authorization = 'Bearer ' + token
    }
    return request
})

export default Axios