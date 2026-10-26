

import { useState } from 'react';

const ShoppingCart = () => {
  const [items, setItems] = useState([]); 
  const [text, setText] = useState('');
  const [price, setPrice] = useState('');

  const AddProduct = () => {
    if (!text || !price) return;
    
    const newProduct = {
      id: Date.now(),
      name: text,
      price: parseFloat(price)
    };
    
    setItems([...items, newProduct]);
    setText('');
    setPrice('');
  };

  const RemoveProduct = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <h2>Quantity Chart</h2>

      <div>
        <input 
          type="text" 
          placeholder="product name" 
          value={text}
          onChange={(event) => setText(event.target.value)} 
        />      
        <input 
          type="number" 
          placeholder="product price" 
          value={price}
          onChange={(event) => setPrice(event.target.value)} 
        />  

        <button onClick={AddProduct}>Add Product</button>        
      </div>

      <div>
        <h3>Product List</h3>

{/* ustaadi confuse waaye maanta dhan ietm iyo name ,id unbaa lahaa  */}
     

          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} 
                <button onClick={() => RemoveProduct(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        
      </div>

      <div>
        Total Price: ${totalPrice}
      </div>
    </div>
  );
};

export default ShoppingCart;