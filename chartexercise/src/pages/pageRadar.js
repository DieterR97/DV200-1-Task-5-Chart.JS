import React from "react";
// import data to be used in graph
import { UserData } from "../data";
// import useState to set chart properties
import { useState } from 'react';
// import specific chart component
import RadarChart from "../components/ChartFive";

function PageRadar() {

    // setup chart component
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: 'User Gained (kg)',
                data: UserData.map((data) => data.userGain),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: 'User Lost (kg)',
                data: UserData.map((data) => data.userLost),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                borderColor: 'rgb(53, 162, 235)',
                borderWidth: 1,
            },
        ],
    });

    return (
        <div>
            <br />
            <h1>Radar Chart</h1>
            <br />
            <div style={{ width: 600, margin: 'auto' }}>
                <RadarChart ChartData={userData} />
            </div>
        </div>
    )
}

export default PageRadar;