import React, {useState} from 'react';
import Card from "../../components/Card/Card";
import Form from "../../components/Form/Form";
import opener from "../../assets/badges/opener.png";
import account from "../../assets/avatars/blanco-avatar.png";
import {useForm} from "react-hook-form";
import {allUsersData} from "../../context/data";
import styles from "./Account.module.css";
import {useHistory} from "react-router-dom";


function Account() {

    const history = useHistory()

    const {register, handleSubmit, formState: {errors}} = useForm();
    const [error, setError] = useState(false);

    function handleImgClick() {
        //    TODO: Avatar slider uit Start.js openen, maar alleen het 1e scherm tonen
        history.push("/start")
    }

    async function handleFormSubmit(data) {
        try {
            console.log(data)
            // TODO: PATCH request om username, email, password aan te passen
        } catch (e) {
            console.error(e);
            setError(true);
        }
    }

    return (
        <>
            <Card
                large
                title="ACCOUNT"
                titleImg={account}
                cardImg={opener}>
                <div className={styles["account__form-box"]}>
                    <Form
                        className={styles["account__form-label"]}
                        handleFormSubmit={handleFormSubmit}
                        handleSubmit={handleSubmit}
                        errors={errors}
                        register={register}
                        buttonText={"SUBMIT"}
                        fields={[
                            {type: "text", name: "current username"},
                            {type: "text", name: "new username"},
                            {type: "email", name: "current email"},
                            {type: "email", name: "new email"},
                            {type: "password", name: "current password"},
                            {type: "password", name: "new password"},]}>
                    </Form>

                    <div className={styles["account__avatar-box"]}>
                        <h4 className={styles["account__avatar-label"]}>CHANGE AVATAR:</h4>
                        <div className={styles["account__avatar-picker"]}>
                            <img onClick={handleImgClick} className={styles["account__avatar-img"]}
                                 src={allUsersData.users[0].avatarImg} alt="img"/>
                        </div>
                    </div>

                </div>
                {error &&
                <p>Error HERE</p>}
            </Card>
            <div className="footer-hidden footer-hidden--small">footer</div>
        </>
    );
}

export default Account;