"use client";
import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto'; // Importing Chart.js auto bundle

const ChartComponent = () => {
  const chartRef = useRef(null); // Reference to the canvas
  const chartInstanceRef = useRef(null); // Reference to the chart instance
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Data and config
    const data = {
      labels: ['03-03-2024', '10-03-2024', '17-03-2024', '24-03-2024', '31-03-2024'],
      datasets: [
        {
          label: 'Draft',
          data: [9, 3, 13, 1, 5],
          backgroundColor: '#7FC2E7',
          borderColor: '#7FC2E7',
          borderWidth: 1
        },
        {
          label: 'Submitted',
          data: [14, 18, 30, 7, 7],
          backgroundColor: '#0683c6',
          borderColor: '#0683c6',
          borderWidth: 1
        },
        {
          label: 'Approved',
          data: [2, 9, 13, 3, 9],
          backgroundColor: '#02A6FF',
          borderColor: '#02A6FF',
          borderWidth: 1
        },
        {
          label: 'Rejected',
          data: [7, 1, 2, 15, 12],
          backgroundColor: '#05496E',
          borderColor: '#05496E',
          borderWidth: 1
        }
      ]
    };

    const config = {
      type: 'bar',
      data,
      options: {
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Start Date' // Label for X axis
            }
          },
          y: {
            title: {
              display: true,
              text: 'Number of timesheet' // Label for Y axis
            },
            beginAtZero: true
          }
        }
      }
    };

    // Destroy the existing chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create a new chart instance
    chartInstanceRef.current = new Chart(chartRef.current, config);

    // Cleanup function
    return () => {
      chartInstanceRef.current.destroy();
    };

  }, [screenWidth]); // Run effect when screenWidth changes

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="h-auto">
      <div className="w-auto">
        <div className="bg-white lg:p-4 p-2 lg:h-[372px] md:h-auto lg:w-auto h-[300px]">
          <canvas ref={chartRef} height={284}></canvas> {/* Attach ref to canvas */}
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
