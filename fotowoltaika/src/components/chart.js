
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
const Linegraph = (props) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
        );
    const options = {
            responsive: true,
            plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
            },
        };
    const labels = props.data.map((qwe) => qwe.date);
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: props.data.map((qwe) => qwe.wh),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ]};
    return (
        <Line options={options} data={chartData}/>
    );
        
}

export default Linegraph;