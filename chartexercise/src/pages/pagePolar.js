import React from "react";
// import data to be used in graph
import { UserData } from "../data";
// import useState to set chart properties
import { useState } from 'react';
// import specific chart component
import PolarAreaChart from "../components/ChartFour";

function PagePolar() {

    // setup options for title
    const optionsGained = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'User Weight Gained',
            },
        },
    };

    // setup chart component
    const [userDataGained, setUserDataGained] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: 'User Gained (kg)',
                data: UserData.map((data) => data.userGain),
            }
        ],
    });

    // setup options for title
    const optionsLost = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'User Weight Lost',
            },
        },
    };

    // setup chart component
    const [userDataLost, setUserDataLost] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: 'User Lost (kg)',
                data: UserData.map((data) => data.userLost),
            }
        ],
    });

    return (
        <div>
            <br />
            <h1>PolarArea Chart</h1>
            <br />
            {/* <div style={{ width: 600, margin: 'auto' }}>
                <PolarAreaChart ChartOptions={options} ChartData={userData} />
            </div> */}
            <div style={{ width: 1200, display: 'flex', margin: 'auto' }}>
                <div style={{ width: 600, display: 'flex', margin: 'auto' }}>
                    <PolarAreaChart ChartOptions={optionsGained} ChartData={userDataGained} />
                </div>
                <div style={{ width: 600, display: 'flex', margin: 'auto' }}>
                    <PolarAreaChart ChartOptions={optionsLost} ChartData={userDataLost} />
                </div>
            </div>
        </div>
    )
}

export default PagePolar;