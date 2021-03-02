import { getUser, getUserActivo } from "../../base/05-funciones"

describe('Pruebas en 05-funciones.js', () => {
    test('getUser debe retornar un objeto ', () => {
        const userTest={
            uid:1212,
            username:'ElKpo',
        }

        const user= getUser();
        console.log(user)

        expect(user).toEqual(userTest);
    })

    test('getUserActivo debe retornar un objeto ', () => {
        
        const nombre= "Gabriel"

        const userTest={
            uid:'abc1',
            username: nombre,
        }

        const user= getUserActivo(nombre);
        console.log(user)

        expect(user).toEqual(userTest);
    })
    
})
