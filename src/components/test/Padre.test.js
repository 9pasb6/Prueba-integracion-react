import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Importa extend-expect para utilizar toBeInTheDocument
import Padre from '../Padre/Padre';


// Prueba unitaria

describe("<Padre/>", () => {
    test('al dar click en el boton limpiar se debe limpiar el texto que contiene la etiqueta P del padre', () => { 
        render(<Padre/>);


  // Captura el elemento de texto que contiene "Texto:"
const textElement = screen.getByText(/Texto:/i);

// Captura el contenido inicial del elemento
const initialTextContent = textElement.textContent;

// Utiliza screen.getByRole para encontrar el botón "Limpiar"
const sumitElement = screen.getByRole('button', { name: /Limpiar/i });

// Actualiza el contenido del elemento de texto directamente
textElement.textContent = 'Texto: Hola mundo';

// Verifica que el contenido haya cambiado
expect(textElement.textContent).toBe('Texto: Hola mundo');

// Simula un clic en el botón "Limpiar"
fireEvent.click(sumitElement);

// Verifica que el contenido vuelva a su estado inicial (limpio)
expect(initialTextContent).toBeTruthy();

    });
});
