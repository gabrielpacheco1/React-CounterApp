const persona={
    nombre:'Tony',
    apellido:'Stark',
    edad:45,
    direccion:{
        ciudad:'nueva york',
        cp:4700,
    },
};

console.log({persona});
//console.table(persona);

const persona2=persona; //copia de la referencia

persona2.nombre='Peter';
console.log(persona2.nombre); //cambia ambas vbles
console.log(persona.nombre);

const persona3={...persona}; //copia los valores y crea una nueva vble
persona3.nombre='Gabriel'; //no modifica los de persona
console.log('separar');
console.log(persona.nombre);
console.log(persona3.nombre);