
import { useState } from 'react'
import './App.css'

function App() {
  let [count,setCount] = useState(0);
  const increaseCount = ()=>{
    setCount(count+1);
  }

 

  return (
    <>
    <button onClick={increaseCount}>Lujain Alibrahim {count} </button>
     
    </>
  )
}

export default App
