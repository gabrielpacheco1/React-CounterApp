import React, {useState} from 'react'
import PropTypes from 'prop-types'

//SNIPPET: rafcp (crea un funct comp con proptypes)

const CounterApp = ({value=0}) => {


    /*const state = useState('Gabriel'); //usualmente no se usa asi
    console.log(state)*/

    /*const [nombre, setNombre] = useState('Gabriel');
    console.log(nombre, setNombre)*/

    const [counter, setCounter] = useState(value);

    const handleAdd = (e) => {
        setCounter(counter+1);
        //setCounter( (c) => c+1 ); otra forma
    } 

    const handleSubstract = (e) => {
        setCounter(counter-1);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h1 className="counter">{counter}</h1>

            <button className= "contar" onClick= {handleSubstract}>-1</button>
            <button onClick= { () => setCounter(value)}>Reset</button>
            <button className= "contar" onClick= {handleAdd}>+1</button>
            
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;