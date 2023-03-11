import React from 'react'
import styles from './todo.module.css'
export default function Todo({todo , toggleTodo , todoDeleteHandler}) {

 const handleTodoClick = ()=>{
    toggleTodo(todo.id)
 }
 const handleDeleteTodo = ()=>{
  todoDeleteHandler(todo.id)
 }
  return (
    <div>
    
    <label  >
    <input type="checkbox"  name="" id="" defaultChecked={todo.complete} j onClick={handleTodoClick}/>
    <h2 className={styles.input} >{todo.name}</h2>
    </label>
    <button className={styles.btn} onClick={handleDeleteTodo}>Remove</button>
      
    </div>
  )
}
