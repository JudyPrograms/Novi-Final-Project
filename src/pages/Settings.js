import React from 'react';
import Card from "../components/Card/Card";
import broom from "../assets/badges/broom.png"
import pencil from "../assets/symbols/pencil.png"

// Pagina voor administrator: aanpassen game inhoud
function Settings() {
    return (
        <Card large
              title="SETTINGS"
              titleImg={pencil}
              cardImg={broom}>
            <div className="start-text__box">Pagina voor administrator: aanpassen game inhoud.</div>
        </Card>
    );
}

export default Settings;