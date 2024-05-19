import React from 'react';
import ProductDetails from './ProductDetails';
import SalesGraph from './SalesGraph';
import SalesDataTable from './SalesDataTable';
import productData from './mock_data/stackline_frontend_assessment_data_2021.json'; // Assuming you have a JSON file

function App() {
  return (
    <div className="dashboard">
      <div className="product-details">
        <ProductDetails product={productData[0]} />
      </div>
      <div className="sales-data">
        <SalesGraph salesData={productData[0].sales} />
        <SalesDataTable salesData={productData[0].sales} />
      </div>
    </div>
  );
}
export default App;
