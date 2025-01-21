import React, {useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';


function RealTimeDataCharts() {
  const [data, setData] = useState([]);
  useEffect(() => {

    let interval = setInterval(() => {
      let newData = Math.random() * 100;

      setData((prevData) => [...prevData, newData].slice(-20));
    }, 2000);

    return () => clearInterval(interval);

  }, [])

  const chartData = {
    labels: data.map((_, index) => index),
    datasets: [
      {
        label: 'My First dataset',
        data: data,
        fill: false,
        backgroundColor: 'rgba(75, 192, 104, 0.4)',
        borderColor: 'rgb(75, 192, 128)',
      },
      
    ],
  };

  const options = {
    responsive: true,
    animation: { duration: 0, },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Time (seconds)',
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Value',
          },
        },
      },
    },
  }

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  )
}

export default RealTimeDataCharts