import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('hello sir');

  useEffect(() => {
  
    document.title = `${greeting} ${name}`;
    console.log(name);
  }, [greeting, name]); 

  return (
    <div>
      <h1>Enter Your Name</h1>
      <input 
        type="text" 
        value={name} 
        onChange={(event) => setName(event.target.value)} 
      />

      <h1>Choose a Greeting</h1>
      <input 
        type="text" 
        value={greeting} 
        onChange={(event) => setGreeting(event.target.value)} 
      />
    </div>
  );
}

export default App;