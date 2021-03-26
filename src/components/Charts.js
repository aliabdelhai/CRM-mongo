import React from 'react';
import TopEmployees from "./TopEmployees";
import SalesByCountry from "./SalesByCountry";
import SalesSinceDate from "./SalesSinceDate";


function Charts() {
    return (
        <div>
            <div id="chartsTop">
                <TopEmployees />
                <SalesByCountry/>
            </div>
            <div id="chartsBottom">
                <SalesSinceDate/>
            </div>

        </div>
    );

}

export default Charts;