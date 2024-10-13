import './App.css'
import { useReducer, useState } from 'react';
import AddTodo from './Components/AddTodo/AddTodo'
import TodoList from './Components/TodoList/TodoList'
import TodoContext from './Context/TodoContext';
import TodoDispatchContext from './Context/TodoDispatchContext';
import todoReducer from './Reducers/TodoReducer';



function App() {
  const [list , dispatch] = useReducer(todoReducer , [])
  
  return (
    <TodoContext.Provider value={{list }}>
      <TodoDispatchContext.Provider value={dispatch}>
        <AddTodo/>
        <TodoList/>
     </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}

export default App
