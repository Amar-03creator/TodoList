import './App.css'
import { useState } from 'react';
import AddTodo from './Components/AddTodo/AddTodo'
import TodoList from './Components/TodoList/TodoList'
import TodoContext from './Context/TodoContext';



function App() {
  const [list, setList] = useState([
    {id: 1 , todoData : 'Todo 1' , finished : false},
    {id: 2 , todoData : 'Todo 2' , finished : false},
  ]);

  
  return (
    <TodoContext.Provider value={{list , setList}}>
    <AddTodo updateList={(todo) => 
      setList([
        ...list , 
        {id: list.length + 1 ,
        todoData: todo , 
        finished: false}
        ])}/>
     <TodoList/>
    </TodoContext.Provider>
  )
}

export default App
