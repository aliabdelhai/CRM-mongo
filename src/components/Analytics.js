import React, { Component } from 'react';
import Charts from './Charts';
import "../styles/analytics.css"
import Badges from "./Badges";

function Analytics() {

    return (
        <div>
            <div id="analytics-container">
                <div><Badges/></div>
                <div><Charts/></div>
            </div>
        </div>
    );

}

export default Analytics;
