import React from 'react';
// import specific chart
import { Radar } from 'react-chartjs-2';
// import Chart for properties
import { Chart } from 'chart.js/auto';

// ChartData is props / parameters
function RadarChart({ ChartData }) {
    return (
        // return specific chart with ChartData as chart data
        <Radar data={ChartData} />
    )
}

// export Chart component
export default RadarChart;