import { useEffect, useState } from 'react'
import './App.css'
import ToggleBtn from './Components/ToggleBtn'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'
import { TodoProvider } from './contexts/TodoContext'
import { ThemeContext } from './contexts/theme'

function App() {
  const [todos, setTodos] = useState([]);
  const [themeMode, setThemeMode] = useState("light");

  useEffect(() => {
    const todosData = JSON.parse(localStorage.getItem("todos"));

    if (todosData && todosData.length > 0) {
      setTodos(todosData)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  useEffect(() => {
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(themeMode);
}, [themeMode]);

  const addTodo = (todo) => {
    setTodos(prev => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos(prev =>
      prev.map(prevTodo =>
        prevTodo.id === id ? todo : prevTodo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }
  const toggleTheme =()=>{

     setThemeMode(prev =>
    prev === "light" ? "dark" : "light"
  );
  }
  
  return (
    <ThemeContext value={{themeMode, toggleTheme }}>
      <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
        <div className="min-h-screen bg-amber-50 dark:bg-blue-950 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
                Manage Your Todos
              </h1>
              <ToggleBtn />
            </div>

            <div className="space-y-4">
              <TodoForm />

              {todos.length > 0 ? <div className='space-y-3'>
                {todos.map(todo => {
                  return <TodoItem key={todo.id} todo={todo} />
                })}
              </div> : <p className='text-xl tracking-wider font-semibold flex items-center justify-center mt-10 text-black dark:text-white'>No Todos are present</p>}
            </div>
          </div>
        </div>
      </TodoProvider>
    </ThemeContext>


  );
}
export default App
