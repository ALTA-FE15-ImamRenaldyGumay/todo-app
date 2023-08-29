import React, { useState } from 'react'

import Form from './NewTodoForm'
import TodoList from './TodoList'

function Cardtodo() {

  return (
    <div className='p-4 w-80 bg-yellow-200 rounded-xl shadow-md m-5'>
      <div className='text-center font-bold mb-3 text-2xl'>
        To Do List
      </div>
      {/* <TodoList /> */}
    </div>
  )
}

export default Cardtodo