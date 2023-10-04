import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Incrementor</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>        
        <p role="current-count">
          Count is {count}
        </p>
      </div>
    </div>
  )
}

export default App
