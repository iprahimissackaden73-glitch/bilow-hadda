import React from 'react';
import { CartProvider } from './CartContext';
import { ProductCard } from './ProductCard';
import { CartSummary } from './CartSummary';

// Liiska qalabka (Gadgets) ee dukaanka
const sampleGadgets = [
  { 
    id: 1, 
    name: 'Wireless Earbuds', 
    price: 59.99, 
    image: 'https://media.istockphoto.com/id/1339425411/photo/wireless-earphones-in-charging-case-on-grey-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=uoS-LzuFpqVwKdmmVxf1YFexX-PCv1HtyZDkc5vjdLE=' 
  },
  { 
    id: 2, 
    name: 'Smart Watch', 
    price: 129.99, 
    image: 'https://images.unsplash.com/photo-1637756856692-9428bed9466c?q=80&w=1170&auto=format&fit=crop' 
  },
  { 
    id: 3, 
    name: 'Mini Power Bank', 
    price: 34.99, 
    image: 'https://images.unsplash.com/photo-1736516434209-51ece1006788?w=1000&auto=format&fit=crop&q=60' 
  },
];

export default function App() {
  return (
    <CartProvider>
      <div style={styles.appContainer}>
        {/* Qaybta Alaabta la iibinayo */}
        <div style={styles.catalogSection}>
          <h2>Gadget Store</h2>
          <div style={styles.grid}>
            {sampleGadgets.map((gadget) => (
              <ProductCard key={gadget.id} product={gadget} />
            ))}
          </div>
        </div>

        {/* Qaybta Koobitaanka Gaariga (Cart Summary) */}
        <div style={styles.cartSection}>
          <CartSummary />
        </div>
      </div>
    </CartProvider>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    padding: '30px',
    fontFamily: 'sans-serif',
    maxWidth: '900px',
    margin: '0 auto',
  },
  catalogSection: {
    flex: 1,
  },
  grid: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
  },
  cartSection: {
    alignSelf: 'flex-start',
  },
};