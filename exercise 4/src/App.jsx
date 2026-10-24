
import {useState} from "react";


function App() {



  const [On, setOn] = useState(false);


  const Turn = () => {
    setOn(!On);
  };

return (
    <>
  
      { <h3>   Light Switch{On ? "OFF" : "ON"}
         </h3> }
      <button onClick={Turn}> Turn{On ? "ON" : "OFF"} </button>
    </>
  );



}


export default App;