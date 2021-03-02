
describe('pruebas en archivo demo.test', () => {

    test( 'deben ser iguales los Strings', () => {
        //arrange
        const mensaje= 'Hola mundo';
        //act
        const mensaje2= `Hola mundo`;
        //assert
        expect(mensaje).toBe(mensaje2); // ===
    
    })

});


