
import {useState} from "react";

const   Todolist =()=>{

const [todos, setTodos] = useState([]);
 const [ inputVale , setInputValue] = useState("");
 
const handleAdd = () => {
 
const NewTodo={
  id: crypto.randomUUID(),
  text: inputVale,
  completed: false}
setTodos([...todos, NewTodo]);

setInputValue("");

// console.log(todos);
};


return <>



<h1> TO - DO LIST</h1>
<input type="text" placeholder="Enter your favourite" onChange={(event) => setInputValue(event.target.value)} value={inputVale} />

<button onClick ={handleAdd}> Add</button>


<ul>

 </ul> 
 {    
todos.map((todo)=>( <li>{todo.text}</li>))



 }
 
 </>
}

export default Todolist;