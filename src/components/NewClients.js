import React from "react";
import "../styles/badges.css"
import { observer, inject } from 'mobx-react'


function NewClients(props) {

    return <div id="clientContainer">
        <div id="newClientBadge">
            <i className="fas fa-chart-line"></i>
        </div>
        <div id="newClientText">
            <span class="num">{props.clientsStore.totalNewClients}</span>
            <span id="leftBText">New {props.clientsStore.getFormmatedDate(Date.now()).substring(4)} Clients</span>
        </div>
    </div>

}

export default inject("clientsStore")(observer(NewClients))