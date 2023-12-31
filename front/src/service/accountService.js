let saveToken = (token) => {
    localStorage.setItem('token', token)
}

let logOut = () => {
    localStorage.removeItem('token')
    window.location('/')
    
}

let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
}
export const accountService = {
    saveToken, logOut, isLogged
}