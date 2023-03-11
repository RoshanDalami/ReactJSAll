import { useEffect, useRef, useState } from "react";
import TodoList from "./TodoList";
import uuid from 'react-uuid'

const LOCAL_STORAGE_KEY = 'todoApp.todos'
function App() {

  const getItemHandler = ()=>{
    const todos = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(todos){
      return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    }
    else{
      return []
    }
  }
  const [todos, setTodos] = useState(getItemHandler());
  const todoNameRef = useRef()



  

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
  },[todos])

  
  // useEffect(()=>{
  //   const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

  //   if(storedTodos) setTodos(storedTodos)
  //   console.log('stored')
  // },[])

  //key submission 
  useEffect(()=>{
    const keyDownHandler =(event)=>{
      if(event.key === 'Enter'){
        event.preventDefault()

        handleAddTodo()
      }
    }


    document.addEventListener('keydown',keyDownHandler)

    return(()=>{
      document.removeEventListener('keydown',keyDownHandler)
    })
  },[])

  //To toggle todo
  const toggleTodo = (id) =>{
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  const handleAddTodo = (event)=>{
    const name = todoNameRef.current.value
    if(name === ''){
      return 
    }
    setTodos(prevTodo =>{
      return [...prevTodo, {id:uuid(),name:name , complete: false}]
    })
    todoNameRef.current.value = null

  }
  const handleClearTodos =()=>{
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }
  const todoDeleteHandler =(id)=>{
     const newTodos = [...todos]
     const index = newTodos.findIndex(todo => todo.id === id)
     newTodos.splice(index,1)
     setTodos(newTodos)
  }

  return (
    <>
      
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo} >Add</button>
      <button onClick={handleClearTodos}>Clear complete</button>
      <div> {todos.filter(todo => !todo.complete).length} left to do</div>
      <TodoList todos={todos} toggleTodo ={toggleTodo} todoDeleteHandler={todoDeleteHandler} />
    </>
  );
}

export default App;
