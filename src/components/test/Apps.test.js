import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom';
import App from '../App/App'

describe("<App/>", () => {
    

// test unitario

    test('se renderiza el componente App', () => { 
        render(<App/>);
        
        
        const countElement = screen.getByText(/Count:/i);

        
        expect(countElement).toBeTruthy();
      
    })

// test de integración


    
});