import { useState } from 'react'
import './App.css'

function App() {

  const [Bg,setBg] = useState("white");
  const[text,setText] = useState("black")
 

  const handleColor = (isBg) => {
    const randomColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    if (isBg) {
      console.log("sda");
      
      setBg(randomColor)
    }else{
      setText(randomColor)
    }
   }

  return (
    <div className={`flex justify-center items-center p-4 flex-col gap-3 ]`}  style={{ backgroundColor: Bg }}>
      <p style={{ color: text }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat nulla reprehenderit similique mollitia accusantium quae qui sapiente facilis? Perspiciatis minima consectetur, sequi laboriosam molestiae commodi quos qui. Ea facilis quam delectus libero inventore asperiores? Aspernatur, quas sit iusto delectus itaque deserunt, voluptas atque ea, doloribus ullam nulla. Facere, cum neque.</p>
      <div className='flex gap-4'>
        <button className='bg-blue-900 text-white text-lg rounded-md p-4' onClick={()=>handleColor(true)}>Change bg</button>
        <button  className='bg-blue-900 text-white text-lg rounded-md p-4' onClick={()=>handleColor(false)}>Change txt</button>
      </div>
    </div>
  )
}

export default App
