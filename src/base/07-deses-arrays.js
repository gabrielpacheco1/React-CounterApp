const personajes=['Goku', 'Trunks'];
const [p1]=personajes;
console.log(p1);
const [,p2]=personajes; //si quiero el segundo
console.log(p2);

export const retornaArreglo=()=>{
    return ['ABC', 123];
}

const [letras, numeros]=retornaArreglo();
//console.log(numeros, letras);

//Tarea
const useState = (valor)=>{
    return [valor, ()=>{console.log('Hola mundo')}];
} 

const [nombre, setNombre]=useState('Gabriel');
//console.log(nombre);
setNombre();