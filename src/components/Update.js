
import React, { useState } from "react";
import { observer, inject } from 'mobx-react'
import "../styles/actions.css";

function Update(props) {

    const [input, setInput] = useState({ name: "", transfer: "", email: "", owner: "" })

    const declareSale = (input,flags) => {
        props.clientsStore.declareSale(input, flags)
    }
    const updateEmail = (input,flags) => {
        props.clientsStore.updateEmail(input,flags)
    }
    const updateOwner = (input,flags) => {
        props.clientsStore.updateOwner(input, flags)
    }


    return (
        <div id="Update">
            <h3>Update</h3>
            <div className="updateWrapper">
                Client
          <input
                    placeholder="Client Name"
                    id="clientName"
                    list="client"
                    type="text"
                    className="selectInput"
                    value={input.name}
                    onChange={({ target }) => setInput(state => ({ ...state, name: target.value }))}
                />
                <datalist id="client">
                    {props.clientsStore.clients.map(c => (
                        <option value={c.name} key={c._id} />
                    ))}
                </datalist>
            </div>

            <div className="updateWrapper">
                Transfer ownership to
          <input
                    placeholder="Owner Name"
                    id="transfer"
                    list="owner"
                    type="text"
                    className="selectInput"
                    value={input.transfer}
                    onChange={({ target }) => setInput(state => ({ ...state, transfer: target.value }))}
                />
                <datalist id="owner">
                    {props.clientsStore.getOwners.map((o, i) => (
                        <option value={o} key={i} />
                    ))}
                </datalist>

                <div className= "update-btn-text" onClick={() => updateOwner(input)}>TRANSFER</div><span id="TRANSFER"></span>
            </div>

            <div className="updateWrapper">
                Send Email
          <input
                    list="email"
                    id="sendEmail"
                    placeholder="Email Type"
                    onChange={({ target }) => setInput(state => ({ ...state, email: target.value }))}
                    className="selectInput"
                />
                <datalist id="email">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </datalist>

                <div className="update-btn-text" onClick={() => updateEmail(input)}>SEND</div><span id="SEND"></span>
            </div>

            <div className="updateWrapper">
                Declare sale!
          <div></div>
                <div className="update-btn-text" id="declare" onClick={() => declareSale(input)}>DECLARE</div><span id="DECLARE"></span>
            </div>
        </div>
    );
}


export default inject("clientsStore")(observer(Update))