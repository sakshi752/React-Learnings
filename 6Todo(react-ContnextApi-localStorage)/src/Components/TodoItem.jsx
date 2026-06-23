import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

const TodoItem = ({todo}) => {
// console.log("todo data",todo);

  const [isTodoEditable,setIsTodoEditable]  =useState(false);
  const [todoMsg,setTodoMsg] = useState(todo.todo)

  const {updateTodo,toggleComplete,deleteTodo} = useTodo();

  const toggleCompleted = ()=>{
    toggleComplete(todo.id);
  }

  const editTodo = ()=>{
    updateTodo(todo.id,{...todo,todo:todoMsg})
     setIsTodoEditable(false)
  }

  return (
    <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}>
      <input  className={`cursor-pointer`} type="checkbox" name="" id="" checked={todo.completed} onChange={toggleCompleted}/>

      <input className={`w-full  px-2 outline-none bg-transparent rounded-lg ${todo.completed?"line-through" :""}      isTodoEditable ? "border-black/10 px-2" : "border-transparent" ${todo.isTodoEditable?"border-black/10 px-2" : "border-transparent"}`}type="text" name="" id="" readOnly={!isTodoEditable} value={todoMsg}
      onChange={(e)=>setTodoMsg(e.target.value)}
      />


      <button className='w-8 h-8 bg-white rounded cursor-pointer' onClick={()=>{
        if(todo.completed)return;
        if (isTodoEditable) {
          console.log("is edit");
          
          editTodo();
        }else{
          setIsTodoEditable(prev=>!prev)
        }
      }}>  {isTodoEditable ? "📁" : "✏️"}
      </button>
      <button className='w-8 h-8 bg-white rounded cursor-pointer' onClick={()=>deleteTodo(todo.id)}>❌</button>
    </div>
  )
}

export default TodoItem
