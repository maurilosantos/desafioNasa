import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import texto1 from './components/texto1/texto1'
import Texto1 from './components/texto1/texto1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Texto1 />}></Route>
          <Route path={"/"} element={<Texto2 />}></Route>
          <Route path={"/"} element={<Texto3 />}></Route>
          <Route path={"/"} element={<Texto4 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
