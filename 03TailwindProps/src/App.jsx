import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card' //props

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400  text-black p-4 rounded-xl'>Tailwind</h1>
      {/* <Card user="saalim"/> Props */}
      <Card btnText="click"/>
    </>
  )
}

export default App
