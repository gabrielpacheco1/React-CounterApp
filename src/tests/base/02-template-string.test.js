import '@testing-library/jest-dom'
import { getSaludo } from "../../base/02-template-strings";

describe('pruebas en template-strings.js', () => {
    
    test('getSaludo debe retornar "Hola Gabriel"', () => {
        const nombre='Gabriel';
        
        const saludo=getSaludo(nombre);
        console.log(saludo)

        expect(saludo).toBe('Hola ' + nombre);
    })

    test('getSaludo debe retornar "Hola Gabriel"', () => {
        
        const saludo=getSaludo();
        console.log(saludo)

        expect(saludo).toBe('Hola Carlos');
    })
    
})
