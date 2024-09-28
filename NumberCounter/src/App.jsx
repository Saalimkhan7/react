import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter, setCounter]=useState(15)

  // let count=15
  const addValue=()=>{
    console.log("value",counter);
    const stop=20
    if(counter===stop){
      return
    }else{
      counter=counter+1
      setCounter(counter)
    }
  }
    
  const removeValue=()=>{
    if(counter<=0){ 
      return
    }else{
      counter=counter-1
      setCounter(counter)
    }
  }

  return (
    <>
     <h1>counter</h1>
     <h2>counter value:{counter}</h2>

     <button
     onClick={addValue}
     >addValue {counter}</button>
     <br />
     <button
     onClick={removeValue}>
      remove value</button>
    </>
  )
}

export default App
