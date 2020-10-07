import {operacionesBasicas} from './test-exercise.component';

describe('Pruebas con operaciones matematicas basicas', () => {
    let Operaciones = new operacionesBasicas();

    // tslint:disable-next-line: max-line-length
    it('Cuando la operacion recibe el numero 0 este no puede permitirlo y debe indicarle al usuario que los numeros deben ser mayor que 0', () => {
        const resultado = Operaciones.realizarOperacion(0, 15, 'suma');
        expect(resultado).toBe('ninguno de los valores debe ser 0');
    });

    it('Cuando se reciben los numeros 50 y 25 debe retornar la suma de estos dos valores que es 75', () => {
        const resultado = Operaciones.realizarOperacion(50, 25, 'suma');
        expect(resultado).toBe(75);
    });

    it('Cuando se reciben los numeros 32 y 23 debe retornar la resta de estos dos valores que es 9', () => {
        const resultado = Operaciones.realizarOperacion(32, 23, 'resta');
        expect(resultado).toBe(9);
    });

    it('Cuando se reciben los numeros 25 y 25 debe retornar la multiplicacion de estos dos valores que es 625', () => {
        const resultado = Operaciones.realizarOperacion(25, 25, 'multiplicacion');
        expect(resultado).toBe(625);
    });

    it('Cuando se reciben los numeros 10 y 2 debe retornar la division de estos dos valores que es 5', () => {
        const resultado = Operaciones.realizarOperacion(10, 2, 'division');
        expect(resultado).toBe(5);
    });

    // tslint:disable-next-line: max-line-length
    it('Cuando se reciben los numeros 25 y 50, se le debe indicar al usuario que el primer numer siempre debe ser mayor que el segundo', () => {
        const resultado = Operaciones.realizarOperacion(25, 50, 'division');
        expect(resultado).toBe('25 debe ser mayor a 50 ');
    });


    it('Cuando se llama la funcion de operaciones basicas y el parametro de operacion(suma, resta, division, multiplicacion) este vacio, debe retornar undefined', () =>{
        const resultado = Operaciones.realizarOperacion(10, 15, '');
        expect(resultado).toBeUndefined();
    });
});
