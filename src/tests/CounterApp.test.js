import React from 'react';
//import {render} from '@testing-library/react';
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import CounterApp from '../CounterApp'

describe('Pruebas en comp CounterApp', () => {
    
    let wrapper= shallow(<CounterApp />);

    beforeEach(() => {
        wrapper= shallow(<CounterApp />);
    })

    test('debe mostar el <CounterApp /> correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostar el valor por defecto de 100', () => {
        const valorDefecto= 100;
        const wrapper= shallow(<CounterApp value= {valorDefecto} />)
    
        const valorContador= wrapper.find('h1.counter').text(); //similar al querySelector
        //console.log(valorContador);
        expect(valorContador).toBe(valorDefecto.toString());
    })
    
    test('debe incrementar con el boton +1', () => {
        wrapper.find('button').at(2).simulate('click')
        //console.log(buttonMas.html()); //para comprobar que estoy recuperandolo correctamente
        const valorContador= wrapper.find('h1.counter').text().trim();
        expect(valorContador).toBe('1');
    })
    
    test('debe decrementar con el boton -1', () => {
        wrapper.find('button').at(0).simulate('click')
        const valorContador= wrapper.find('h1.counter').text().trim();
        expect(valorContador).toBe('-1');
    })

    test('debe colocar el valor por def con el boton reset', () => {
        const wrapper= shallow(<CounterApp value= {150} />)
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(1).simulate('click')
        const valorContador= wrapper.find('h1.counter').text().trim();
        console.log(valorContador);

    })
    
})

