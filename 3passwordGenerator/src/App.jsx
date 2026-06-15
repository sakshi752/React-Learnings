import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

// Password Generator Project - Learning Summary
// Used useState to manage password length, number toggle, character toggle, and generated password.
// Used useEffect to regenerate the password whenever settings change.
// Used useCallback to optimize and memoize functions.
// Used useRef to access the input field directly for selecting and copying text.
// Learned controlled components through range and checkbox inputs.
// Practiced event handling with onChange and onClick.
// Implemented random password generation using JavaScript string manipulation and Math.random().
// Used the Clipboard API to copy passwords.
// Improved understanding of React's data flow: State Change → Re-render → Effect Execution → UI Update.
// Applied Tailwind CSS for styling and responsive layout.

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [charAllowed, setCharAllowed] = useState(true)
  const [pw, setPw] = useState("")
  const passwordRef = useRef(null)

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPw(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [pw])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={pw} className='outline-none w-full py-1 px-3 bg-white' placeholder='password'
          readOnly ref={passwordRef} />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>

          <input type="range"
            min={6} max={20} value={length} className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>Length : {length}</label>

        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
          />
          <label htmlFor='numberInput'>Numbers </label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={charAllowed}
            id='charInput'
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
          />
          <label htmlFor='charInput'>Character </label>
        </div>
      </div>
    </div>
  )
}

export default App
