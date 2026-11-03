import React from 'react';
import { useCart } from './CartContext';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3 style={styles.title}>{product.name}</h3>
      <p style={styles.price}>${product.price.toFixed(2)}</p>
      <button style={styles.button} onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #e1e4e8',
    borderRadius: '8px',
    padding: '16px',
    width: '200px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '140px',
    objectFit: 'cover',
    borderRadius: '4px',
  },
  title: {
    fontSize: '16px',
    margin: '10px 0 5px',
    color: '#333',
  },
  price: {
    fontSize: '15px',
    fontWeight: 'bold',
    color: '#0070f3',
    marginBottom: '12px',
  },
  button: {
    backgroundColor: '#10d53b',
    color: '#190202',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    fontWeight: '600',
  },
};