import React from 'react'

function Todo({todo,todoDeleteHandler}) {

    const deleteHandler =()=>{
        todoDeleteHandler(todo.id)
    }
  return (
    <div>
    <label htmlFor="">
    <li >{todo.name}</li>
      <button onClick={deleteHandler}>Delete</button>
    </label>
      
    </div>
  )
}

export default Todo
