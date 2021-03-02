function saludar(nombre){
    return `Hola ${nombre}`;
}

saludar=30; 

console.log(saludar); //muestra 30 en consola

//la forma de hacer las funciones es

const saludar2 = function (nombre){
    return `Hola ${nombre}`;
}

//saludar2=40; //no opermite hacerlo

console.log(saludar2('Gabriel'));

const saludar3 = (nombre) =>{
    return `Hola ${nombre}`;
}

const saludar4 = (nombre) => `Hola ${nombre}`; //si solo tiene un return en su cuerpo
const saludar5 = () => `Hola mundo`;

console.log(saludar3);
console.log(saludar3('Gabi'));
console.log(saludar4('Gabiii'));
console.log(saludar5());

/*const getUser=()=>{
    return{
        uid:1212,
        username:'ElKpo',
    }
}*/

export const getUser=()=>({
        uid:1212,
        username:'ElKpo',
}); //tienen que ir los () para indicar que es un objeto
//const user=getUser();
//console.log(user);

//tarea

export const getUserActivo = (nombre) => ({
        uid: 'abc1',
        username: nombre,
});

const userActivo= getUserActivo('Gabriel');
//console.log(userActivo);




