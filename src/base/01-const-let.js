const nombre= 'Gabriel';
const apellido='Pacheco';
let valor=5; //si fuera const no se puede hacer la sig linea
valor=4;
console.log(nombre+' '+apellido);
console.log(valor);

if(true){
    let valor=6 //vble de scope
    console.log(valor);
}

console.log(valor); //valor declarado en linea 4