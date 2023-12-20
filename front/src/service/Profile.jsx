//recuperation profile
const getProfile = async () => {
    const responseUser = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
            'Authorization': "Bearer " + localStorage.getItem('token'),
        },
    });

    let userResponse = await responseUser.json()

    //save Profile => //save in reduxStore
    let userProfile = userResponse.body
    console.log(userProfile)
}

export default getProfile