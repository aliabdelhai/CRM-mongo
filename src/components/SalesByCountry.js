import React, { Component, useState } from 'react'
import { observer, inject } from 'mobx-react'

import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'
import "../styles/analytics.css"


function SalesByCountry(props) {

    const [selection, setSelection] = useState("country")

    const handleSelection = e => setSelection(e.target.value)

    const createDataObject = (clients, selection) => {
        let dataObj = {}
        for (let client of clients) {
            if (client.sold) {
                dataObj[client[selection]] ? dataObj[client[selection]]++ : dataObj[client[selection]] = 1
            }
        }
        return dataObj
    }

    const generateSalesByDataPoint = (data, selection) => {

        let dataObj = createDataObject(data, selection)
        let dataArr = []
        let dataKeys = Object.keys(dataObj)

        for (let item of dataKeys) {
            dataArr.push({ name: item.split(" ")[0], sales: dataObj[item] })
        }

        return dataArr
    }

    const getChartDataBySelection = () => {
        let data = props.clientsStore.clients
        if (selection === "country") {
            return generateSalesByDataPoint(data, "country")
        } else if (selection === "email") {
            let data2 = data.filter(c => c.email_type != '-')
            return generateSalesByDataPoint(data2, "emailType")
        } else if (selection === "owner") {
            return generateSalesByDataPoint(data, "owner")
        }
    }



    return (
        <div id="sales-by" className="chart">
            <span id="salesBy">Sales By:</span>
            <select
                id="sales-by-selection"
                value={selection}
                onChange={handleSelection}
                className="selectInput">
                <option value="country">Country</option>
                <option value="email">Email</option>
                <option value="owner">Owner</option>
            </select>

            <BarChart
                width={600}
                height={200}
                data={getChartDataBySelection()}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#955196" />
            </BarChart>

        </div>
    )
}

export default inject("clientsStore")(observer(SalesByCountry))