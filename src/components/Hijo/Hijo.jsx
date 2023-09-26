import React, { useState } from 'react'
import './Hijo.css'

const Hijo = ({onTextChange}) => {

    const [valorInput, setValorInput] = useState('');

    const handleChange = (e) =>{

        setValorInput(e.target.value); 
        // funcion flecha para manipular los valores mediante el hook useState

    }

    const handleSubmit = () =>{
        onTextChange(valorInput); // aqui le esta seteando el valor ingresado
    }



  return (
    <>
    <h1>Componente hijo</h1>
    <div className='container'>
    <input type="text" onChange={handleChange}/>
    <button onClick={handleSubmit}>Enviar</button>
    </div>
  



    </>
  )
}

export default Hijo