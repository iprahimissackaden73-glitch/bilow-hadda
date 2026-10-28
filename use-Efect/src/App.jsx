import { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("react");
  const [ name, setName]   = useState("omat")


  useEffect(()=>{

document.title=title
console.log( title)


  },[title])

  return (
    <div>
      <h2>change document title</h2>
      <input type="text" placeholder=" enter your name " value={name} onChange={(Event)=> setName(Event.target.value)} />

<input type="text" placeholder=" enter your new title" value={title} onChange={(Event)=> setTitle(Event.target.value)} />



    </div>
  );
}

export default App;