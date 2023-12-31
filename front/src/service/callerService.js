import axios from 'axios'
import { accountService } from './accountService'

const Axios = axios.create({
    baseURL: 'http://localhost:3001/api/v1'
})

// Token interceptor

Axios.interceptors.request.use(request => {

    if (accountService.isLogged()) {
        request.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
    }
    return request
})

export default Axios