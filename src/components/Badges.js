import React from 'react';
import "../styles/analytics.css";
import NewClients from "./NewClients";
import OutStandingClients from "./OutStandingClients";
import HottestCountry from "./HottestCountry";
import EmailsSent from "./EmailsSent";


function Badges() {

    return (
        <div id="badges-container">
            <div><NewClients /></div>
            <div><EmailsSent /></div>
            <div><OutStandingClients /></div>
            <div> <HottestCountry/></div>
        </div>
    );

}

export default Badges;
