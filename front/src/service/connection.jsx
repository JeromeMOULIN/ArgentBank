import findProfile from './Profile'
import { redirect } from "react-router-dom"

const Connection = async (e) => {
    e.preventDefault()

    //data recuperation
    const form = e.target
    const formData = new FormData(form)

    //set fetch Params
    let urlencoded = new URLSearchParams();
    urlencoded.append("email", formData.get("email"))
    urlencoded.append("password", formData.get("password"))

    //fetch to recveiv token
    console.log("Trying to connect.")
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: urlencoded,
    });
    let result = await response.json()

    //catching error
    if (!response.ok) {
        console.log('Connection lost.')
        console.log(result)
        return
    }

    //response
    console.log('Connection done.')
    console.log(result)
    let token = result.body.token

    //save token in localStorage
    localStorage.setItem("token", token)

    getProfile()

    window.location.href  = '../user'

}
export default Connection