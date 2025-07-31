/* eslint-disable no-unused-vars */
import React from 'react'

export function TodoInput(props) {
  const { handleAddTodo, handleEditTodo } = props

  return (
    <div className="todo-input">
      <input 
        type="text" 
        placeholder="Add a new todo..."
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleAddTodo(e.target.value)
            e.target.value = ''
          }
        }}
      />
    </div>
  )
}