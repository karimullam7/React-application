// src/components/ProductList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsRequest, addToCart } from '../actions/actions';

const ProductList = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={styles.productGrid}>
      {products.map((product) => (
        <div key={product.id} style={styles.productCard}>
          <img src={product.image} alt={product.title} style={styles.productImage} />
          <h3 style={styles.productTitle}>{product.title}</h3>
          <p style={styles.productPrice}>${product.price.toFixed(2)}</p>
          <div style={styles.buttonContainer}>
            <button
              onClick={() => handleAddToCart(product)}
              style={styles.addButton}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// Enhanced styling for product list with proper button alignment
const styles = {
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  },
  productCard: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  productImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '10px',
  },
  productTitle: {
    fontSize: '1.1em',
    color: '#333',
    marginBottom: '10px',
  },
  productPrice: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: '15px',
  },
  buttonContainer: {
    marginTop: 'auto', // Push the button to the bottom
    display: 'flex',
    justifyContent: 'center',
  },
  addButton: {
    backgroundColor: '#28a745',
    color: '#ffffff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
    transition: 'background-color 0.3s ease',
    width: '100%', // Ensure full width for consistency
  },
  addButtonHover: {
    backgroundColor: '#218838',
  },
};

export default ProductList;
