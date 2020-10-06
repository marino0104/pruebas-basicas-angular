import { operacionesBasicas } from './test-exercise.component';

describe('Pruebas test-exercise', () => {
  let component = new operacionesBasicas();

  it('Cuando recibe un cero, debe retornar un texto de alerta.', () => {
    const response = component.realizarOperacion(0,0, 'suma');
    expect(response).toEqual('ninguno de los valores debe ser 0');
  })

  it('Cuando recibe dos numeros y la operacion de suma, debe retornar el resultado.', () => {
    const response = component.realizarOperacion(5,5, 'suma');
    expect(response).toEqual(10);
  })

  it('Cuando recibe dos numeros y la operacion de resta, debe retornar el resultado.', () => {
    const response = component.realizarOperacion(5,5, 'resta');
    expect(response).toEqual(0);
  })

  it('Cuando recibe dos numeros y la operacion de multiplicacion, debe retornar el resultado.', () => {
    const response = component.realizarOperacion(5,5, 'multiplicacion');
    expect(response).toEqual(25);
  })

  it('Cuando recibe dos numeros, donde el numero 1 es mayor al numero 2 y la operacion de division, debe retornar el resultado.', () => {
    const response = component.realizarOperacion(5,5, 'division');
    expect(response).toEqual(1);
  })

  it('Cuando recibe dos numeros, donde el numero 2 es mayor al numero 1 y la operacion de division, debe retornar el resultado.', () => {
    const response = component.realizarOperacion(5,15, 'division');
    expect(response).toEqual('5 debe ser mayor a 15 ');
  })

})
