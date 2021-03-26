import React from "react";
import "../styles/badges.css"
import { observer, inject } from 'mobx-react'

function EmailsSent(props) {

    return (
        <div id="emailContainer">
            <div id="emailBadge">
                <i className="fas fa-envelope" />
            </div>
            <div id="textContainer">
                <span id="emailNum">{props.clientsStore.countEmail}</span>
                <span id="emailText">Emails Sent</span>
            </div>
        </div>
    );

}

export default inject("clientsStore")(observer(EmailsSent))