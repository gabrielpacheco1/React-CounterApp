import { getHeroeById } from './08-imp-exp';


export const getHeroeByIdAsync=(id)=>{
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            //console.log('2 segundos despues') asi lo hacia primero
            const heroe = getHeroeById(id);
            //console.log(heroe);
            if(heroe)
                resolve(heroe);
            else    
                reject('No se pudo encontrar el heroe')
            //reject ('no se pudo encontrar el heroe');
        }, 1500) //cantidad de milisegundos
    });
    
}
