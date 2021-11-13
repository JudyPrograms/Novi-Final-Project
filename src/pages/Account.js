import React from 'react';
import Card from "../components/Card/Card";
import opener from "../assets/badges/opener.png";
import account from "../assets/avatars/blanco-avatar.png";

function Account() {
    return (
        <Card large
        title="ACCOUNT"
        titleImg={account}
        cardImg={opener}>
            <div className="start-text__box">Pagina voor speler: aanpassen username, password etc.</div>
        </Card>
    );
}

export default Account;