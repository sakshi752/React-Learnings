import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'
import { toast } from 'react-toastify';

const TodoForm = () => {
  const [todo, setTodo] = useState("")
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) toast.error("Todo is not present")

    addTodo({ todo, completed: false })
    setTodo("")
  }

  return (
    <form onSubmit={add} className='flex'>
      <input className='w-[80%] bg-white p-3 rouded  border-gray-900 outline-none' type="text"
        placeholder='Enter todo'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className='bg-green-500 w-[20%] text-white text-xl tracking-wider rounded cursor-pointer' type='submit'>Add</button>
    </form>
  )
}

export default TodoForm
