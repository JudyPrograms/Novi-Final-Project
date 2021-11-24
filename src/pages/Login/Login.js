import React, {useState, useContext} from 'react';
// import axios from "axios";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import {allUsersData} from "../../context/data";
import styles from "./Login.module.css";
import Card from "../../components/Card/Card";

function Login() {

    const {loginTemp} = useContext(AuthContext);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [error, setError] = useState(false);

    async function handleFormSubmit(data) {
        try {
        // TODO: Email en password posten naar backend en token opvragen
            //     const result = await axios.post("http://endpoint", {
            //         email: data.email,
            //         password: data.password,
            //     });
            //     login(result.data.accessToken);
            const result = allUsersData.users.find(userObj => userObj.email === data.email)
            loginTemp(result)

        } catch (e) {
            console.error(e);
            setError(true);
        }
    }


    return (
        <div className="login-container">
            <Card small>
                <div className={styles["login-box"]}>
                    <form onSubmit={handleSubmit(handleFormSubmit)}>

                        <label htmlFor="email-field"> E-MAIL:
                            <input
                                type="email"
                                id="email-field"
                                {...register("email",
                                    {required: "E-mail address required"})}
                            />
                        </label>
                        {errors.email && <span className={styles["error-text"]}>{errors.email.message}</span>}

                        <label htmlFor="password-field"> PASSWORD:
                            <input
                                type="password"
                                id="password-field"
                                {...register("password",
                                    {required: "Password required"})}/>
                        </label>
                        {errors.password && <span className={styles["error-text"]}>{errors.password.message}</span>}

                        <button
                            type="submit"
                            className={styles["form-button"]}>
                            LOGIN
                        </button>

                    </form>

                    <div className={styles["register-link"]}>
                        {error && <span className={styles["error-text"]}>Account not found</span>}
                        <Link to="/account">Register new account here</Link></div>
                </div>
            </Card>
            <div className="footer-hidden footer-hidden--small">footer</div>
        </div>
    );
}

export default Login;