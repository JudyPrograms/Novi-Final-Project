import React, {useState, useContext} from 'react';
// import axios from "axios";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import {allUsersData} from "../../context/data";
import styles from "./Login.module.css";
import Card from "../../components/Card/Card";
import Form from "../../components/Form/Form";

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
                    <Form
                        className={"login__form-label"}
                        handleFormSubmit={handleFormSubmit}
                        handleSubmit={handleSubmit}
                        errors={errors}
                        register={register}
                        buttonText={"LOGIN"}
                        fields={[
                            {type: "email", name: "email"},
                            {type: "password", name: "password"},
                        ]}
                    />

                    <div className={styles["register-link"]}>
                        {error && <span className="error-text">Account not found</span>}
                        <Link to="/account">Register new account here</Link></div>
                </div>
            </Card>
            <div className="footer-hidden footer-hidden--small">footer</div>
        </div>
    );
}

export default Login;