import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';

function Chart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = chartRef.current; // Get the current chart instance

    // Destroy the previous chart instance if it exists
    if (chartInstance) {
      chartInstance.destroy();
    }
  }, []);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Number of Students',
        data: [50, 60, 70, 80, 90, 100],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

 

  return (
    <div>
      <h2>Number of Students Gained Over Time</h2>
      <Line ref={chartRef} data={data} />
    </div>
  );
}

export default Chart;
