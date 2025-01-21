import React, { useContext, useState } from 'react'
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  


  useContext(() => {

    let interval = setInterval(() => {
      let newData = Math.random()*100;

      setData((prevData) => [...prevData, newData].slice(-20));
    }, 1000);

  },[])

const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'My First dataset',
        data: [65, 59, 70, 51, 40],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'My First dataset',
        data: [68, 55, 70, 81, 66],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };
  
const options = {
    responsive : true,
}
  

function MyLineChart() {
  const [data, setData] = useState([]);
  return (
    <div>
        <Line data={chartData} options={options}/>
    </div>
  )
}

export default MyLineChart