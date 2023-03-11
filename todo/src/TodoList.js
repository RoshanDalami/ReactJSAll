import React from 'react'
import Todo from './Todo'
export default function TodoList({todos , toggleTodo , todoDeleteHandler}) {
  return (
    todos.map(
        todo =>{
            return <Todo key={todo.id} toggleTodo ={toggleTodo} todoDeleteHandler={todoDeleteHandler} todo={todo}/>
        }
    )
  )
}
