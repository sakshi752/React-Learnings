import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Contexts/theme'
import Card from './Components/Card'
import ThemeBtn from './Components/ThemeBtn'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }
  // actual change in theme

  useEffect(() => {
    console.log("Theme changed:", themeMode);
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className='flex flex-wrap min-h-screen items-center bg-white dark:bg-black text-black dark:text-white'>
        <div className='w-full'>
          <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>

      </div>
    </ThemeProvider>
  )
}

export default App
