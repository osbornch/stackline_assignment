import React from 'react';

function SalesDataTable({ salesData }) {
  return (
    <div className="sales-table">
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Retail Sales</th>
          <th>Wholesale Sales</th>
          <th>Units Sold</th>
          <th>Retailer Margin</th>
        </tr>
      </thead>
      <tbody>
        {salesData.map((data, index) => (
          <tr key={index}>
            <td>{data.weekEnding}</td>
            <td>${data.retailSales.toLocaleString()}</td>
            <td>${data.wholesaleSales.toLocaleString()}</td>
            <td>{data.unitsSold}</td>
            <td>${data.retailerMargin.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default SalesDataTable;
