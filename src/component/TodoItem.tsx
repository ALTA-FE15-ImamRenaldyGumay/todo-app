import React, {FC, useState} from 'react'

interface TodoItemProps {
    id: number
    title: string
    completed : boolean
    toggleTodo: (id: number, completed: boolean) => void
    deleteTodo: (id: number) => void
}

const TodoItem: FC<TodoItemProps> = ({id, title, completed, toggleTodo, deleteTodo}) => {
    return (
        <li>
            <label htmlFor="">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={e => toggleTodo(id, e.target.checked)} />
                {title}
            </label>
            <button
                onClick={() => deleteTodo(id)}
            >Delete</button>
        </li>
    )
}

export default TodoItem