import React, { useState } from "react";
import "../styles/actions.css";
import { observer, inject } from 'mobx-react'


function AddClient(props) {

    const [input, setInput] = useState({ name: "", country: "", owner: "" })

    const add = (input) => {
        props.clientsStore.addClient(input)
    }

    return (
        <div id="Add-client">
            <h3>Add Client</h3>
            <div id="addClient">
                <div className="addwrapper" >
                    Name:
                    <input
                        className="addClientInput"
                        type="text"
                        id="name"
                        value={input.name}
                        onChange={({ target }) => setInput(state => ({ ...state, name: target.value }))}
                    /> </div>

                <div className="addwrapper">Country:
          <input
                        className="addClientInput"
                        type="text"
                        id="country"
                        value={input.country}
                        onChange={({ target }) => setInput(state => ({ ...state, country: target.value }))}
                    /></div>

                <div className="addwrapper">Owner:
          <input
                        className="addClientInput"
                        type="text"
                        id="owner"
                        value={input.owner}
                        onChange={({ target }) => setInput(state => ({ ...state, owner: target.value }))}
                    /></div>
            </div>
            <button id="addClientButton" onClick={() => add(input)}>Add New Client</button>
        </div>
    );
}


export default inject("clientsStore")(observer(AddClient))
