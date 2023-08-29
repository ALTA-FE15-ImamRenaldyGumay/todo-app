import React, { FC, useState } from 'react'
import TodoItem from './TodoItem'

interface TodoListProps {
    todos: any[]
    toggleTodo: (id: number, completed: boolean) => void
    deleteTodo: (id: number) => void
}

const TodoList: FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <ul>
            {todos.length === 0 && "No todos"}
            {todos.map(todo => {
                return (
                    <TodoItem
                        {...todo}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo} />
                )
            })}
        </ul>
    )
}

export default TodoList