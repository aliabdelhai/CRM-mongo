import React from "react";
import "../styles/badges.css"
import { observer, inject } from 'mobx-react'

function HottestCountry(props) {

    return (
        <div id="hotContainer">
            <div id="hotBadge">
                <i className="fas fa-globe-americas" />
            </div>
            <div id="textContainer">
                <span id="hotCountry">{props.clientsStore.hottestCountry}</span>
                <span id="hotText">Hottest Country</span>
            </div>
        </div>
    );
}


export default inject("clientsStore")(observer(HottestCountry))