import { useRef } from 'react'
import Todo from '../Todo'
import Store from '../useReducer'
import './App.css'

function App() {
  const input = useRef()
  const btn = useRef()
  const handleClick =() => {
    console.log(input.current.value);
    console.log(btn.current.textContent)
  }
  return (
     <>
    {/* //   <input ref={input} type="text"  />
    //<button type='submit' onClick={handleClick}  ref={btn}>Show</button> */}
        <Store/>
        <Todo/>
      </>
  )
}

export default App
