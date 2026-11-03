import React from 'react';
import { useCart } from './CartContext';

export const CartSummary = () => {
  const { cart, updateQuantity, removeFromCart, subtotal } = useCart();

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Cart Summary</h2>
      {cart.length === 0 ? (
        <p style={styles.empty}>Your cart is empty.</p>
      ) : (
        <>
          <ul style={styles.list}>
            {cart.map((item) => (
              <li key={item.id} style={styles.item}>
                <div>
                  <span style={styles.itemName}>{item.name}</span>
                  <div style={styles.itemPrice}>${item.price.toFixed(2)}</div>
                </div>
                <div style={styles.controls}>
                  <button onClick={() => updateQuantity(item.id, -1)} style={styles.qtyBtn}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} style={styles.qtyBtn}>+</button>
                  <button onClick={() => removeFromCart(item.id)} style={styles.removeBtn}>🗑️ </button>
                </div>
              </li>
            ))}
          </ul>
          <div style={styles.totalSection}>
            <strong>Subtotal:</strong>
            <span style={styles.totalPrice}>${subtotal.toFixed(2)}</span>
          </div>
          <button style={styles.checkoutBtn} onClick={() => alert('Proceeding to checkout!')}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid #e1e4e8',
    borderRadius: '8px',
    padding: '20px',
    width: '320px',
    backgroundColor: '#e0e6ec',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    color: '#0c0101',
  },
  empty: {
    color: '#0c0101',
    fontStyle: 'italic',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 16px 0',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 0',
    borderBottom: '1px solid #d1caca',
  },
  itemName: {
    fontSize: '14px',
    fontWeight: '500',
  },
  itemPrice: {
    fontSize: '12px',
    color: '#0c0202',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  qtyBtn: {
    padding: '2px 6px',
    backgroundColor: '#e1e4e8',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    color: '#020d04',
  },
  removeBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#0f0302',
  },
  totalSection: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '16px',
    borderTop: '2px solid #02070e',
    paddingTop: '12px',
    marginBottom: '16px',
  },
  totalPrice: {
    fontWeight: 'bold',
    color: '#0070f3',
  },
  checkoutBtn: {
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    padding: '10px',
    borderRadius: '4px',
    width: '100%',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};