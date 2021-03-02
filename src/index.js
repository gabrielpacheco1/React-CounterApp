import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp'
import './index.css';

//const saludo= <h1>Hola mundo</h1>; //NO es un componente

const divRoot=document.querySelector('#root');
console.log(divRoot);

//ReactDOM.render(<PrimeraApp saludo="Hola soy Gabriel"/>,divRoot);
ReactDOM.render(<CounterApp value={0} />,divRoot);
//es mejor que documento.body.append porque nos permite crear un arbol de componentes, y facilita la comunicacion entre componentes.

