import React, {useState, useContext} from 'react';
// import axios from "axios";
import {useForm} from "react-hook-form";
import {AuthContext} from "../../context/AuthContext";
import {allUsersData} from "../../context/data";
import styles from "./Login.module.css";
import Card from "../../components/Card/Card";
import Form from "../../components/Form/Form";

function Login() {

    const {loginTemp} = useContext(AuthContext);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [error, setError] = useState(false);
    const [newAccount, toggleNewAccount] = useState(false);

    async function handleFormSubmit(data) {
        try {
            if (!newAccount) {
                // TODO: User opvragen met email en password en token opvragen
                // const result = await axios.post(`http://localhost:8080/users/${username}`, {
                //     email: data.email,
                //     password: data.password,
                // });
                // login(result.data.accessToken);
                const result = allUsersData.users.find(userObj => userObj.email === data.email)
                loginTemp(result)
            } else {
            //    TODO: new username, email, password posten
            //     const result = await axios.post
                toggleNewAccount(!newAccount)
            }

        } catch (e) {
            console.error(e);
            setError(true);
        }
    }


    return (
        <div className="login-container">
            <Card small
                  title={newAccount && "CREATE ACCOUNT"}>
                <div className={styles["login-box"]}>

                    {newAccount ?
                        <Form
                            className={styles["create__form-label"]}
                            handleFormSubmit={handleFormSubmit}
                            handleSubmit={handleSubmit}
                            errors={errors}
                            register={register}
                            buttonText="CREATE"
                            fields={[
                                {type: "text", name: "unique username"},
                                {type: "email", name: "email"},
                                {type: "password", name: "password"},]}
                        />
                        :
                        <>
                            <Form
                                className={styles["login__form-label"]}
                                handleFormSubmit={handleFormSubmit}
                                handleSubmit={handleSubmit}
                                errors={errors}
                                register={register}
                                buttonText="LOGIN"
                                fields={[
                                    {type: "email", name: "email"},
                                    {type: "password", name: "password"},]}
                            />

                            <div className={styles["register-link"]}>
                                {error && <span className="error-text">Account not found</span>}
                                <a onClick={() => toggleNewAccount(!newAccount)}>Register new account here</a>
                            </div>
                        </>
                    }
                </div>
            </Card>
            <div className="footer-hidden footer-hidden--small">footer</div>
        </div>
    );
}

export default Login;