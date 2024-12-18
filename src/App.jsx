import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('maroon')
  // function changeColor() {
  //   setColor(color)
  // }

  return (
    <div>
      
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-1 rounded-3xl">
      <button onClick={() =>setColor('black')} className= 'outline-none px-4 py-2 rounded-full shadow-lg text-black'>test1</button>
      <button onClick={() =>setColor('pink')} className= 'outline-none px-4 py-2 rounded-full shadow-lg text-black '>test2</button>
      <button onClick={() =>setColor('maroon')} className= 'outline-none px-4 py-2 rounded-full shadow-lg text-black'>test3</button>
    </div>
  </div>
</div>

    </div> 
  )
}

export default App
