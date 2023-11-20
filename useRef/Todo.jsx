import React, { useReducer } from 'react'
import { useState } from 'react';

function Reducer(state,action) {
    switch (action.type) {
        case 'addTodo':
            return {todos: [...state.todos, action.payload]}    
        default:
    }
}

const Todo = () => {
    const [todoInp, setTodoInp] = useState('')
    const [state, dispatch] = useReducer(Reducer, {todos: []})

    function addTodo(item) {
        dispatch({type: 'addTodo', payload: item})
    }
  return (
    <>
        <input value={todoInp} onChange={(e) => setTodoInp(e.target.value)} />
        <button onClick={() => addTodo(todoInp)} >Add</button>

        <ul>
        {state.todos.map((item) => (
            <li>{item}</li>
        ))}
        </ul>
    </>
  )
}

export default Todo