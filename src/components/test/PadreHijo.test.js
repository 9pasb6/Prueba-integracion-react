import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom';
import Padre from '../Padre/Padre'

describe("<Padre/>", () => {
    

// test de integración

    test('se actualiza el componente padre cuando el boton en el hijo es clickeado', () => { 
        render(<Padre/>);
        
        
        //estas constantes sirven para traer el input y el boton del hijo

        const inputElement = screen.getByRole('textbox'); 
        const sumitElement = screen.getByRole('button', {name: /Enviar/i});
         

        
       fireEvent.change(inputElement,{ target: {value: "Hola mundo"}}); // valor ingresado
       fireEvent.click(sumitElement); // el buton desencadenando el evento hacia el padre
       
       
       const updateText = screen.getByText(/Texto: Hola mundo/i);
       expect(updateText).toBeTruthy(); // texto esperado

    });




    
});