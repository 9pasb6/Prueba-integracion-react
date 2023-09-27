import React, { useState } from 'react'
import Hijo from '../Hijo/Hijo';
import './Padre.css'

const Padre = () => {



const [text, setText]= useState('');

const handleTextChange = (newText) =>{
    setText(newText);
}

// para limpiar a partir de un boton 
const handleTextClean = () =>{
  setText('');
}
// texto va ha llegar desde el hijo
  return (
    <>
    <div className='bigContainer2'>
    <h1>Componente padre</h1>
    <h2>Texto: {text}</h2>
    <button onClick={handleTextClean}>Limpiar</button>

    </div>
    <Hijo  onTextChange={handleTextChange} />
    </>
  )
}

export default Padre