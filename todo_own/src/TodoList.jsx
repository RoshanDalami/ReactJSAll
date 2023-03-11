import React from 'react'
import Todo from './Todo'
function TodoList({todos,todoDeleteHandler}) {
  return (
    <div>
      {todos.map((todo)=> {return <Todo key={todo.id} todo={todo} todoDeleteHandler={todoDeleteHandler} />}
      
      )}
    </div>
  )
}

export default TodoList
