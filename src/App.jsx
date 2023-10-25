import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'

const HomeComponent = () => <h1>HomeComponent</h1>
const AboutComponent = () => <h1>AboutComponent</h1>

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' exact element={() => <div>Home</div>}/>
        <Route path='/about' exact element={() => <div>About</div>}/>
      </Routes>
    </>
  )
}

export default App
