import { userService } from '@service/userService'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import './login.css'

const Login = () => {
    const navigate = useNavigate();
    const Profile = useSelector(state => state.Profile)
    const dispatch = useDispatch()

    const Connect = async (e) => {
        e.preventDefault()


        //data recuperation
        const form = e.target
        const formData = new FormData(form)

        //set fetch Params
        let dataForm = new URLSearchParams();
        dataForm.append("email", formData.get("email"))
        dataForm.append("password", formData.get("password"))

        //fetching for token
        let response = await userService.getToken(dataForm);
        //catching error
        if (response.status != 200) {
            console.log('Connection lost.')
            return
        }

        //response
        console.log('Connection successed.')
        let token = response.body.token

        //save token in redux
        dispatch({ type: "Profile/setLogin", payload: token })
        dispatch({ type: "Profile/setLogged", payload: true })

        //redirection
        navigate('/user')

    }
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={Connect}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label
                        ><input name='email' type="email" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label
                        ><input name="password" type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                        >Remember me</label>
                    </div>

                    <button className="sign-in-button">Sign In</button>

                </form>
            </section>
        </main>
    );
};

export default Login;