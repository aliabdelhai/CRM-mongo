import React, { useState } from 'react';
import { observer, inject } from 'mobx-react'
import '../styles/client.css';
import Popup from "./Popup";
import axios from "axios";

function Client(props) {

    const [showUp, setShowUp] = useState(false)
    const sold = props.client.sold ? <i className="fas fa-check" /> : "-"

    const getFormmatedDate = date => {
        date = new Date(date);
        let day = date.getDate() - 1;
        const month = date.toLocaleString('en-us', { month: 'long' });
        let year = date.getFullYear();
        return `${month} ${day}, ${year}`;
    };

    const handlePopUp = () => {
        setShowUp(!showUp)
    }


    const deleteClient = () => {
        props.clientsStore.deleteClient(props.client._id)
    }


    return (
        <div>
            {showUp ? <Popup close={handlePopUp} name={props.client.name} country={props.client.country} client={props.client} /> : null}
            <div className="client" onDoubleClick={() => handlePopUp()} >
                <span>{props.client.name}</span>
                <span>{props.client.country}</span>
                <span>{getFormmatedDate(props.client.firstContact)}</span>
                <span>{props.client.emailType}</span>
                <span>{sold}</span>
                <span>{props.client.owner}</span>
                <span><i class="fas fa-trash" onClick={deleteClient}></i></span>
            </div>
        </div>
    )

}

export default inject("clientsStore")(observer(Client))