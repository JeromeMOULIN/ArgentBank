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
export default getProfile