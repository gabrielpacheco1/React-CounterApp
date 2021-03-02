import React from 'react';
//import {render} from '@testing-library/react';
import '@testing-library/jest-dom'
import PrimeraApp from '../PrimeraApp';
import {shallow} from 'enzyme'

describe('Pruebas en PrimeraApp', () => {
    // test('Debe mostar el mje "Hola soy Gabriel"', () => {
        
    //     const saludoPrueba="chau";
    //     const {getByText}= render(<PrimeraApp saludo= {saludoPrueba}/>)

    //     expect(getByText(saludoPrueba + '!')).toBeInTheDocument();
    // })

    test('debe mostrar <PrimeraApp> correctamente', () => {
        const saludo= "Hola soy Gabriel";
        const wrapper= shallow(<PrimeraApp saludo= {saludo}/>)
        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar el subtitulo enviado por props', () => {
        const saludo= "Hola soy Gabriel";
        const subt="Este es un subtitulo";
        const wrapper= shallow(
            <PrimeraApp 
                saludo= {saludo}
                subtitulo={subt}
            />)
    
        const textoParrafo= wrapper.find('p').text(); //similar al querySelector
        //console.log(textoParrafo);
        expect(textoParrafo).toBe(subt);
        
    })
    
    
    
})
