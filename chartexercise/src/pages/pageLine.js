import React from "react";
// import data to be used in graph
import { UserData } from "../data";
// import useState to set chart properties
import { useState } from 'react';
// import specific chart component
import LineChart from "../components/ChartTwo";

function PageLine() {

    // setup options for title
    const options = {
        responsive: true,
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'kg'
                }
            }
        }
    }

    // setup chart component
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: 'User Gained',
                data: UserData.map((data) => data.userGain),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'User Lost',
                data: UserData.map((data) => data.userLost),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ],
    });

    return (
        <div>
            <br />
            <h1>Line Chart</h1>
            <br />
            <div style={{ width: 1200, margin: 'auto' }}>
                <LineChart ChartOptions={options} ChartData={userData} />
            </div>
        </div>
    )
}

export default PageLine;