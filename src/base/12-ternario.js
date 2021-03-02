const activo=true;
// let mje='';
// if(activo)
//     mje='activo';
// else
//     mje='inactivo';

// console.log(mje);
const mje=(activo/*===true*/) ? 'Activo':'Inactivo'; //asigna en mje
console.log(mje);

const mensaje= !activo && 'Activo'; //si la primera es falso no sigue evaluando las demas, por lo tanto devuelve falso

console.log(mensaje);