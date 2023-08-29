import React, { useState } from 'react'

import NewTodoForm from '../../component/NewTodoForm'
import Cardtodo from '../../component/Cardtodo'
import TodoList from '../../component/TodoList'

// <div className='container'>
//     <h1>To Do List</h1>
//     <div className='app-wrapper flex justify-center'>
//         <Cardtodo/>
//     </div>

// </div>
const Main = () => {
    const [todos, setTodos] = useState<any[]>([])

    const addTodo = (title: any) => {
        setTodos((currentTodos) => {
            return [...currentTodos,
            {
                id: Math.floor(Math.random() * 10000),
                title,
                completed: false
            }]
        })
    }

    const toggleTodo = (id: number, completed: boolean) => {
        setTodos((currentTodos) => {
            return currentTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        })
    }

    const deleteTodo = (id: number) => {
        setTodos((currentTodos) => {
            return currentTodos.filter((todo) => todo.id !== id)
        })
    }

    return (

        <>
            <NewTodoForm onSubmit={addTodo} />
            <h1>Todo List</h1>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        </>
    )
}

export default Main