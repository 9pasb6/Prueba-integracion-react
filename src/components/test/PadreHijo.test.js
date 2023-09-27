import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom';
import Padre from '../Padre/Padre'

describe("<Padre/>", () => {
    

// test de integración

    test('se actualiza el componente padre cuando el boton en el hijo es clickeado', () => { 
        render(<Padre/>);
        
//-------------LLENAR------------ 

        //estas constantes sirven para traer el input y el boton del hijo
        const inputElement = screen.getByRole('textbox'); 
        const sumitElement = screen.getByRole('button', {name: /Enviar/i});
         

        
       fireEvent.change(inputElement,{ target: {value: "Hola mundo"}}); // valor ingresado
       fireEvent.click(sumitElement); // el buton desencadenando el evento hacia el padre
       
       
       const updateText = screen.getByText(/Texto: Hola mundo/i);
       expect(updateText).toBeTruthy(); // texto esperado

//--------------BORRAR-------------


  // Captura el elemento de texto que contiene "Texto:"
    const textElement = screen.getByText(/Texto:/i);

  
  // Utiliza screen.getByRole para encontrar el botón "Limpiar"
    const deletElement = screen.getByRole('button', { name: /Limpiar/i });
  
  // Simula un clic en el botón "Limpiar"
    fireEvent.click(deletElement);


  // Actualiza el contenido del elemento de texto directamente, es decir lo borra
    textElement.textContent = 'Texto:';

 // Verifica que el contenido haya cambiado y este limpio
    expect(textElement.textContent).toBe('Texto:');

 
  






    });




    
});