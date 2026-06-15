import { useState } from 'react';
import './App.css';
import Button from './Button';

function App() {
  const [count, setCount] = useState(0);

  // let count = 0;

  const decCounter = () => {
    if (count === 0) {
      alert("-ve are not allowed")
    }else{
      // count = count-1;
      // console.log("dec count ",count);
      
     setCount(prev => prev - 1);
    }
  }
  const incCounter = () => {
    // count = count+1;
    // console.log("inc count ",count);
    
   setCount(prev => prev + 1);
  }

  return (
    <>
      {/* <button onClick={incCounter}>+</button> */}
      <h1 className="text-3xl font-bold text-blue-500">
      Hello Tailwind!
    </h1>
      <Button text={"-"} onClick={decCounter}/>
      <span style={{ margin: '0 10px' }}>{count}</span>
      {/* <button onClick={decCounter}>-</button> */}
      <Button text={"+"} onClick={incCounter}/>
    </>
  );
}

export default App;

// npm create vite@latest 

// npm install tailwindcss @tailwindcss/vite
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// })
