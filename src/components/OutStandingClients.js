import React from "react";
import "../styles/badges.css"
import { observer, inject } from 'mobx-react'

function OutStandingClients(props) {

    return (
        <div id="outStandContainer">
            <div id="outBadge">
                <i className="fas fa-user-tie" />
            </div>
            <div id="out-text-container">
                <span id="outStandNum">{props.clientsStore.outStandClients}</span>
                <span id="outStandText">Outstanding Clients</span>
            </div>
        </div>
    );

}
export default inject("clientsStore")(observer(OutStandingClients))