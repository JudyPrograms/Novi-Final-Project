import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import Card from "../components/Card/Card";

function Login() {

    // In de auth context zetten:
    const history = useHistory();

    // const {loginFunction} = useContext(AuthContext);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [error, setError] = useState(false);

    async function handleFormSubmit(data) {

        try {
        //     const result = await axios.post("http://endpoint", {
        //         email: data.email,
        //         password: data.password,
        //     });
        //     loginFunction(result.data.accessToken);
        //
            // In de login functie in de auth context zetten:
            history.push('/start');
        } catch (e) {
            console.error(e);
            setError(true);
        }
    }

    return (
        <div className="login-container">
            <Card small>
                <div className="login-box">
                    <form onSubmit={handleSubmit(handleFormSubmit)}>

                        <label htmlFor="email-field"> E-MAIL:
                            <input
                                type="email"
                                id="email-field"
                                {...register("email",
                                    {required: "E-mail address required"})}
                            />
                        </label>
                        {errors.email && <span className="error-text">{errors.email.message}</span>}

                        <label htmlFor="password-field"> PASSWORD:
                            <input
                                type="password"
                                id="password-field"
                                {...register("password",
                                    {required: "Password required"})}/>
                        </label>
                        {errors.password && <span className="error-text">{errors.password.message}</span>}

                        <button
                            type="submit"
                            className="form-button nav-button">
                            LOGIN
                        </button>

                        {error && <span className="error-text">Inloggegevens onbekend</span>}

                    </form>

                    <p className="register-link"><Link to="/account">Register new account here</Link></p>
                </div>
            </Card>
            <div className="footer-hidden footer-hidden--small">footer</div>
        </div>
    );
}

export default Login;