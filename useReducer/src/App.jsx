import { useReducer } from "react";
import "./App.css";
import Reducer from "./useReducer";

function App() {
  const [state, dispatch] = useReducer(Reducer, {
    firstNum: 0,
    secondNum: 0,
    res: 0,
  });
  const handleChange = (e) => {
    state.firstNum = parseFloat(e.target.value);
    console.log(state.firstNum);
  };
  const handleNum2 = (e) => {
    state.secondNum = parseFloat(e.target.value);
    console.log(state.secondNum);
  };
  console.log(state.res);
  return (
    <>
      {state.res}
      <input type="text" onChange={handleChange} />
      <input type="text" onChange={handleNum2} />
      <button type="text" onClick={() => dispatch({ type: "topla" })}>
        +
      </button>
      <button type="text" onClick={() => dispatch({ type: "cixma" })}>
        -
      </button>
      <button type="text" onClick={() => dispatch({ type: "vurma" })}>
        *
      </button>
      <button type="text" onClick={() => dispatch({ type: "bolme" })}>
        /
      </button>
    </>
  );
}

export default App;
