const persona={
    nombre:'Gabriel',
    edad:23,
    clave:'123',
}

console.log(persona.nombre);

const{nombre,clave,edad}=persona;
console.log(nombre);
console.log(clave);

console.log(edad);

/////////////////
const retronaPersona=(usuario)=>{
    const{nombre,clave,edad}=usuario;
    console.log(nombre, edad, clave);
}
retronaPersona(persona);

const retornaPersona1=({nombre,edad, rango='Capitan',estado})=>{//valor por defecto si no lo tuviera
    console.log(nombre,edad,rango,estado);
}
retornaPersona1(persona);
///////////////
const useContext=({clave,nombre,edad, rango='Capitan'})=>{
    return{
        nombreClave:clave,
        anios:edad,
        direccion:{
            barrio:'Municipal',
            numero:69,
        }
    }
}
const {nombreClave, anios, direccion:{barrio, numero}}=useContext(persona);
console.log(nombreClave,anios);
console.log(`BARRIO: ${barrio}, NUMERO: ${numero}`);