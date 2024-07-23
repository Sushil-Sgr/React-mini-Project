import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const addNum = () => {
    if (count === 20) {
      stop
    }
    else {

      setCount(count + 1)
    }
  }
  const removeNum = () => {
    if (count === 0) {
      stop
    }
    else {
      setCount(count - 1)
    }
  }

  return (
    <>
      <div className="App">
        <button>Counter : {count}</button>
        <br />
        <button onClick={addNum}>Add a number </button>
        <br />
        <button onClick={removeNum}>remove a number</button>
        <br />
      </div>
    </>
  )
}

export default App
