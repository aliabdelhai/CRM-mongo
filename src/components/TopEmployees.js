import React, { Component, useState } from "react";
import { observer, inject } from 'mobx-react'

import { ComposedChart, Bar, XAxis, YAxis, Tooltip, Legend }
    from "recharts";
import "../styles/analytics.css"

// hL6QVC99JuYjB9wh

function TopEmployees(props) {
 
    const generateDataForChart = data => {
        let employees = {}
        let employeesBySales = []
        data.forEach(c => {
            if (c.sold) {
                employees[c.owner]
                    ? employees[c.owner]++
                    : employees[c.owner] = 1
            }
        })
        Object.keys(employees)
            .forEach(e => {
                employeesBySales
                    .push({ name: e, sales: employees[e] })
            })
        let dataForChart = employeesBySales
            .sort((a, b) => a.sales - b.sales)
            .splice(employeesBySales.length - 3)
        return dataForChart
    }

    return (
        <div>
            <div id="top-employees-chart" className="chart">
                <span id="topEmpHeader">Top Employees:</span>
                <ComposedChart
                    layout="vertical"
                    width={500}
                    height={200}
                    data={generateDataForChart(props.clientsStore.clients)}
                    margin={{
                        top: 30, right: 20, bottom: 20, left: 50,
                    }}>
                    <XAxis type="number" dataKey="sales"  />
                    <YAxis reversed={true} dataKey="name" type="category" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" barSize={10} fill="#003f5c" />
                </ComposedChart>
            </div>
        </div>
    );

}

export default inject("clientsStore")(observer(TopEmployees))