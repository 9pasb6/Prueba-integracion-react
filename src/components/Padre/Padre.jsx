import React, { useState } from 'react'
import Hijo from '../Hijo/Hijo';

const Padre = () => {

const [text, setText]= useState('');

const handleTextChange = (newText) =>{
    setText(newText);
}
// texto va ha llegar desde el hijo
  return (
    <>
    <h1>Componente padre</h1>
    <p>Texto: {text}</p>
    <Hijo  onTextChange={handleTextChange} />
    </>
  )
}

export default Padre