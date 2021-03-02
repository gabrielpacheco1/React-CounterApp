//import React, {Fragment} from 'react';
import React from 'react';
import PropTypes from 'prop-types'
//Los componentes se nombran usando UpperCamelCase

const PrimeraApp = ({saludo, subtitulo}) => { //desestructuracion: (props)
    
    //const saludo=[1,2,3]; //si fuera un objeto, no se pueden imprimir de esta forma. Cada elemento es un string
    //const saludo1="Hola, Soy Gabriel";
    /*const persona ={
        nombre: 'Gabriel',
        apellido: 'Pacheco',
        edad: 23
    }*/
    //console.log(saludo);

    return( 
        <>  
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(persona,null,3)}</pre> retornar un objeto*/}
            <p>{subtitulo}</p>
        </>
        //<Fragment>de otra forma (linea1)</Fragment> 
    )

}

    
PrimeraApp.propTypes = {
    saludo:PropTypes.string.isRequired,
    //saludo2:PropTypes.number
}

PrimeraApp.defaultProps = {
    subtitulo: "Soy un subtitulo"
}

export default PrimeraApp;