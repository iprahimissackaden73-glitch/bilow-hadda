

// import { useState } from 'react';

// const ShoppingCart = () => {
//   const [items, setItems] = useState([]); 
//   const [text, setText] = useState('');
//   const [price, setPrice] = useState('');

//   const AddProduct = () => {
//     if (!text || !price) return;
    
//     const newProduct = {
//       id: Date.now(),
//       name: text,
//       price: parseFloat(price)
//     };
    
//     setItems([...items, newProduct]);
//     setText('');
//     setPrice('');
//     price('0')




    
//   };


//   const RemoveProduct = (id) => {
//     setItems(items.filter(item => item.id !== id));
//   };

//   const totalPrice = items.reduce((total, item) => total + item.price, 0);

//   return (
//     <div>
//       <h1>Shopping Cart</h1>
//       <h2>Quantity Chart</h2>

//       <div>
//         <input 
//           type="text" 
//           placeholder="product name" 
//           value={text}
//           onChange={(event) => setText(event.target.value)} 
//         />      
//         <input 
//           type="number" 
//           placeholder="product price" 
//           value={price}
//           onChange={(event) => setPrice(event.target.value)} 
//         />  

//         <button onClick={AddProduct}>Add Product</button>        
//       </div>

//       <div>
//         <h3>Product List</h3>

// {/* ustaadi confuse waaye maanta dhan ietm iyo name ,id unbaa lahaa  */}
     

//           <ul>
//             {items.map((item) => (
//               <li key={item.id}>
//                 {item.name} - ${item.price} 
                
//                 <button onClick={() => RemoveProduct(item.id)}>
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
        
//       </div>

//       <div>
//         Total Price: ${totalPrice}
//       </div>
//     </div>
//   );
// };

// export default ShoppingCart;
import { useState } from 'react';

const ShoppingCart = () => {
  const [items, setItems] = useState([]); 
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const AddProduct = () => {
    const parsedPrice = parseFloat(price);
    
    if (!name.trim() || isNaN(parsedPrice) || parsedPrice < 0) return;
    
    const newProduct = {
      id: Date.now(),
      name: name,
      price: parsedPrice,
      quantity: 1
    };
    
    setItems([...items, newProduct]);
    setName('');
    setPrice('');
  };

  const RemoveProduct = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setItems(items.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }));
  };

  const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <h2>Quantity Chart</h2>

      <div>
        <input 
          type="text" 
          placeholder="product name" 
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />      
        <input 
          type="number" 
          step="any" 
          placeholder="product price" 
          value={price}
          onChange={(e) => setPrice(e.target.value)} 
        />  

        <button onClick={AddProduct}>Add Product</button>        
      </div>

      <div>
        <h3>Product List</h3>
        {items.length === 0 ? (
          <p>Liisku wuu madhan yahay.</p>
        ) : (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} 
                {/* Halkan ayaa laga beddelay si uu quantity-ga dhabta ah u muuqdo */}
                <h4>Quantity {item.quantity}</h4>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span> ({item.quantity}) </span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button onClick={() => RemoveProduct(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        Total Price: ${totalPrice}
      </div>
    </div>
  );
};

export default ShoppingCart;