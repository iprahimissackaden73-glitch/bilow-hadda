
import  { useReducer } from "react";

const inistialState = {
  countA: 0,
  countB: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "incrementA":
      return { ...state, countA: state.countA + 1 };
    case "decrementA":
      return { ...state, countA: state.countA - 1 };
      case "decrementB":
      return { ...state, countB: state.countB - 1 };
      case "incrementB":
      return { ...state, countB: state.countB + 1 };
      case "reset":return { ...state, countA: 0, countB: 0 };
    default:
      return state;
     
  }
};

const DoubleCounter = () => {
  const [state, dispatch] = useReducer(reducer, inistialState);

return (
    <>
    <div>
      <h1>Count A: {state.countA}</h1>
      
      <button onClick={() => dispatch({ type: "incrementA" })}>Increment A</button>
      <button onClick={() => dispatch({ type: "decrementA" })}>Decrement A</button>
       </div>
       <div> 
        <h1>Count B: {state.countB}</h1>
      <button onClick={() => dispatch({ type: "incrementB" })}>Increment B</button>
      <button onClick={() => dispatch({ type: "decrementB" })}>Decrement B</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset Both</button>
   </div> 
   </>
  );
}
export default DoubleCounter;