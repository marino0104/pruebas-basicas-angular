import { operacionesBasicas } from './test-exercise/test-exercise.component';

const operacion = new operacionesBasicas();

describe('Pruebas de ejercicios, operaciones básicas', () => {
  it('debe devolver la suma de ambos numeros', () => {
    const resp = operacion.realizarOperacion(10, 10, 'suma');
    expect(resp).toBe(20);
    expect(typeof resp).toBe('number');
  });

  it('debe de devolver la resta del Num1-Num2', () => {
   const resp = operacion.realizarOperacion(20, 10, 'resta');
   expect(resp).toBe(10);
   expect(typeof resp).toBe('number');
 });

  it('debe de devolver un mensaje ', () => {
   const resp = operacion.realizarOperacion(0, 0, 'resta');
   expect(typeof resp).toBe('string');
   expect(resp).toEqual(`ninguno de los valores debe ser ${0}`);
 });

  it('debe de devolver la multiplicación de ambos numeros', () => {
    const resp = operacion.realizarOperacion(5, 6, 'multiplicacion');
    expect(resp).toBe(30);
    expect(typeof resp).toBe('number');
 });

  it('debe de devolver un mensaje al enviar Num1 menor a Num2', () => {
   const resp = operacion.realizarOperacion(2, 10, 'division');
   expect(typeof resp).toBe('string');
   expect(resp).toEqual(`2 debe ser mayor a 10 `);
 });

  it('debe de devolver la division entre num1 y num2', () => {
    const resp = operacion.realizarOperacion(30, 2, 'division');
    expect(resp).toBe(15);
    expect(typeof resp).toBe('number');
  });

});
