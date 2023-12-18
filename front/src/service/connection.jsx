const Connection = async (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)

    let email = formData.get("email")
    let password = formData.get("password")
    console.log(`email is ${email}, Password is ${password}`)

    console.log("trying to connect")

    const response = await fetch('http://localhost:27017/argentBankDB', {
        method: 'POST',
        header:{
            'Content-Type': 'application/json'
        },
        body: formData,
    });
    console.log(response)
    let result = await response.json()

    console.log(result)
    
}
export default Connection