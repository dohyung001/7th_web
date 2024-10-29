import { useState } from 'react'
import SignUpPage from './pages/SignUpPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignUpPage />
    </>
  )
}

export default App
