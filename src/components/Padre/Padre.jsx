import React, { useState } from 'react'
import Hijo from '../Hijo/Hijo';

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
    <h1>Componente padre</h1>
    <h2>Texto: {text}</h2>
    <button onClick={handleTextClean}>Limpiar</button>
    <Hijo  onTextChange={handleTextChange} />
    </>
  )
}

export default Padre