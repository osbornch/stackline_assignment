import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProductDetails } from './store/actions';

function ProductDetails({ productDetails, fetchProductDetails  }) {
    useEffect(() => {
        fetchProductDetails();
    }, [fetchProductDetails]);

  return (
    <div className="productDetails-container">
      <img src={productDetails.image} alt={productDetails.title} style={{ maxWidth: '100%', height: 'auto' }} />
      <h1>{productDetails.title}</h1>
      <h2>{productDetails.subtitle}</h2>
      <div className="tags">
        {productDetails.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
    productDetails: state.product.productDetails
});

const mapDispatchToProps = {
    fetchProductDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);