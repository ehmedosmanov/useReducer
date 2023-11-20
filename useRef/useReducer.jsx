import { useReducer } from "react";

function Reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload};
    case "decrement":
      return { count: state.count - 1 };
    default:
      break;
  }
}

const Store = () => {
  const [state, dispatch] = useReducer(Reducer, { count: 1 });

  function increment() {
    dispatch({ type: "increment", payload: 10 });
  }

  function decrement() {
    dispatch({ type: "decrement" });
  }
  return (
    <div>
      
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Store;
