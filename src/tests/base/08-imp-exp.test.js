import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from '../../data/heroes'

describe('pruebas en archivo herores', () => {
    
    test('debe retornar un heroe por id', () => {
        const id=1;
        const heroe=getHeroeById(id);
        const heroeData= heroes.find(h => h.id === id);
        //console.log(heroeData);
        expect(heroe).toEqual(heroeData);
    })

    test('debe retornar undefined si heore no existe', () => {
        const id=10;
        const heroe=getHeroeById(id);
        //console.log(heroeData);
        expect(heroe).toBe(undefined);
    })

    test('debe retornar los heroes del owner DC', () => {
        const owner='DC';
        const heroes=getHeroesByOwner(owner);
        const heroesData= heroes.filter(h => h.owner === owner);
        console.log(heroesData);
        expect(heroes).toEqual(heroesData);
        
    })

    test('debe retornar los heroes del owner Marvel', () => {
        const owner='Marvel';
        const heroes=getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);
        
    })
    
})
