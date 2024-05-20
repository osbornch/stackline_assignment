import React from 'react';
import { Line } from 'react-chartjs-2';

function SalesGraph({ salesData }) {
  const data = {
    labels: salesData.map(data => data.weekEnding),
    datasets: [
      {
        label: 'Retail Sales',
        data: salesData.map(data => data.retailSales),
        fill: false,
        borderColor: '#007bff'
      },
      {
        label: 'Wholesale Sales',
        data: salesData.map(data => data.wholesaleSales),
        fill: false,
        borderColor: '#ffc107'
      }
    ]
  };

  return (
    <div >
      <Line data={data} />
    </div>
  );
}

export default SalesGraph;
