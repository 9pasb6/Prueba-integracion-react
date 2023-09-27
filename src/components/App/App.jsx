import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Padre from '../Padre/Padre'
import Hijo from '../Hijo/Hijo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Padre/>
      
     

    </>
  )
}

export default App
