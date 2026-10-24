
import { useState} from "react";



function App() { 
    const  [name, setName] = useState("")

const handleChange =(event)=>{
  setName(event.target.value);
}
    
    return <>  
    <input type="text" onChange = {handleChange} />
    
<h1>hello {name}</h1>

   
        </>
  }



  

export default App;