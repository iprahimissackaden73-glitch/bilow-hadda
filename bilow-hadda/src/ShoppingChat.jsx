import { useState } from "react"



const ShoppingChat = () => {


    const [ product, setProduct] = useState([])
    const [ productName, setProductName] = useState('')
    const [ price , setPrice] = useState('')

  


  return   (  
  <> 

    <div>
      <h1>Shopping Cart</h1>
      <h2>Quantity Chart</h2>   
      
       </div> 

<input type="text" placeholder="product Name" />

<input type="number" placeholder=" price" />
<button >Addprice </button>
  <div>  
  {  


              product.length > 0 ? ( <h2> empty product </h2> 

) 
: ' this card is emty'

  }
</div>
</>   ) }

export default ShoppingChat;