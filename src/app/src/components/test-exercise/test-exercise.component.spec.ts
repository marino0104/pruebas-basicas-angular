import {operacionesBasicas} from './test-exercise.component';

describe('Pruebas de operaciones basicas', () => {
    let Operaciones = new operacionesBasicas();

    it('Cuando la operacion reciba un 0 le debe indicar al usuario que ninguno de los numero debe ser igual a 0', () =>{
        const resultado = Operaciones.realizarOperacion(0, 15, 'suma');
        expect(resultado).toBe('ninguno de los valores debe ser 0');
    })

    it('Cuando la operacion suma reciba num1=15 y num2=25, debe retornar 40', () => {
        const resultado = Operaciones.realizarOperacion(15, 25, 'suma');
        expect(resultado).toBe(40);
    })

    it('Cuando la operacion resta reciba num1=115 y num2=50, debe retornar 65', () => {
        const resultado = Operaciones.realizarOperacion(115, 50, 'resta');
        expect(resultado).toBe(65);
    })

    it('Cuando la operacion multiplicacion reciba num1=10 y num2=8, debe retornar 80', () => {
        const resultado = Operaciones.realizarOperacion(10, 8, 'multiplicacion');
        expect(resultado).toBe(80);
    })

    it('Cuando la operacion division reciba num1=200 y num2=20, debe retornar 10', () => {
        const resultado = Operaciones.realizarOperacion(200, 20, 'division');
        expect(resultado).toBe(10);
    })

    it('Cuando la operacion division reciba num1=35 y num2=60, se le debe indicar al usuario que el numero 1 debe ser mayor al numero 2', () => {
        const resultado = Operaciones.realizarOperacion(35, 60, 'division');
        expect(resultado).toBe('35 debe ser mayor a 60 ');
    })

    it('Cuando la operacion division reciba num1=35 y num2=60, se le debe mostrar un mensaje de error al usuario', () => {
        const resultado = Operaciones.realizarOperacion(35, 60, 'division');
        expect(typeof(resultado)).toBe('string');
    })

    it('Cuando se llame la funcion operaciones basicas y el parametro de operacion este vacio, debe retornar undefined', () =>{
        const resultado = Operaciones.realizarOperacion(10, 15, '');
        expect(resultado).toBeUndefined();
    })
})