const nombre='Gabriel';
const apellido='Pacheco';

//const nombreCompl= nombre+' '+apellido;
//console.log(nombreCompl);
const nombreCompl= `${nombre} ${apellido}`;
//console.log(nombreCompl);

export function getSaludo(nombre="Carlos"){
    return 'Hola '+ nombre;
}

//console.log(`texto: ${getSaludo(nombre)}`);