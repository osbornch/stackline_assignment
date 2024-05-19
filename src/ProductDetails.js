import React from 'react';

function ProductDetails({ product }) {
  return (
    <div className="product-container">
      <img src={product.image} alt={product.title} style={{ maxWidth: '100%', height: 'auto' }} />
      <h1>{product.title}</h1>
      <h2>{product.subtitle}</h2>
      <div className="tags">
        {product.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default ProductDetails;
