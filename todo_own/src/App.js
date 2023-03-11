import { useRef, useState , useEffect } from "react";

import TodoList from "./TodoList";
import uuid from "react-uuid";

function App() {
  const [todos,setTodos ] = useState([])
  const todoItem = useRef()
  useEffect(()=>{
    const keyDownHandler =(event)=>{
      if(event.key === 'Enter'){
        event.preventDefault()
       addTodoList()
      }
    }
    document.addEventListener('keydown',keyDownHandler)
    return(()=>{
      document.removeEventListener('keydown',keyDownHandler)
    })
  },[])

  const addTodoList =()=>{
    const item = todoItem.current.value
    if (item === ''){return}
    setTodos(prevTodo => {
      return [...prevTodo ,  {id:uuid(),name: item}]
    })
    todoItem.current.value = null
  }

  const todoDeleteHandler= (id)=>{
    const newTodos = [...todos]
    const index = newTodos.findIndex((todo)=> id === todo.id)
    newTodos.splice(index,1)
    setTodos(newTodos)
  }

  return (
    <div className="App">
     
      <input type="text" ref={todoItem} />
      <button onClick={addTodoList}>Add</button>
      <TodoList todos={todos} todoDeleteHandler={todoDeleteHandler}/>
      
    </div>
  );
}

export default App;
