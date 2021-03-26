import React, { Component, useState } from 'react';
import { observer, inject } from 'mobx-react'
import '../styles/popup.css';
import axios from "axios";

function Popup(props) {
    const [input, setInput] = useState({ name: "", country: "" })

    const update = (input) => {
        const client = props.client
        props.clientsStore.update(client, input)
        props.close()
    };


    return (
        <div className="popup">
            <div className="popup_inner">

                <div>
                    <button id="closePopup" onClick={props.close}>
                        <i className="fas fa-times" />
                    </button>
                </div>

                <div id="input-container">
                    <div className="popText"> Name : </div>
                    <div>
                        <input
                            className="popInput"
                            placeholder={props.name}
                            value={input.name}
                            id="name"
                            onChange={({ target }) => setInput(state => ({ ...state, name: target.value }))}
                        />
                    </div>
                    <div className="popText"> Country : </div>
                    <div>
                        <input
                            className="popInput"
                            placeholder={props.country}
                            value={input.country}
                            id="country"
                            onChange={({ target }) => setInput(state => ({ ...state, country: target.value }))}
                        />
                    </div>
                </div>


                <div>
                    <button id="updatePopup" onClick={() => update(input)}>UPDATE</button>
                </div>

            </div>
        </div>
    )

}

export default inject("clientsStore")(observer(Popup))