import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/greeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        < Greeting name="Alice" age={25} />
        < Greeting name="Bob" />
      </div>
    </>
  )
}

export default App
