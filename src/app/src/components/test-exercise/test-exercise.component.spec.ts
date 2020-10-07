import { operacionesBasicas } from './test-exercise.component';

describe('pruebas unitarias al componente test-exercise', () => {

  let component = new operacionesBasicas

  it('cuando num1 es igual a 0', () => {
    const num1 = 0;
    const num2 = 2;
    const operacion = 'suma';
    expect( component.realizarOperacion(num1, num2, operacion)).toEqual(`ninguno de los valores debe ser ${0}`)
  });

  it('cuando num1 es igual a 0', () => {
    const num1 = 2;
    const num2 = 0;
    const operacion = 'suma';
    expect( component.realizarOperacion(num1, num2, operacion)).toEqual(`ninguno de los valores debe ser ${0}`)
  });

  it('cuando operacion es igual a suma', () => {
    const num1 = 2;
    const num2 = 3;
    const operacion = 'suma';
    const suma = num1 + num2;
    expect( component.realizarOperacion(num1, num2, operacion)).toBe(suma)
  });

  it('cuando operacion es igual a resta', () => {
    const num1 = 10;
    const num2 = 3;
    const operacion = 'resta';
    const resta = num1 - num2;
    expect( component.realizarOperacion(num1, num2, operacion)).toBe(resta)
  });

  it('cuando operacion es igual a multiplicacion', () => {
    const num1 = 15;
    const num2 = 5;
    const operacion = 'multiplicacion';
    const mult = num1 * num2;
    expect( component.realizarOperacion(num1, num2, operacion)).toBe(mult)
  });

  it('cuando operacion es igual a division y es num1 es menor que num2', () => {
    const num1 = 3;
    const num2 = 27;
    const operacion = 'division';
    expect( component.realizarOperacion(num1, num2, operacion)).toEqual(`${num1} debe ser mayor a ${num2} `)
  });

  it('cuando operacion es igual a division y es num1 es menor que num2', () => {
    const num1 = 27;
    const num2 = 3;
    const operacion = 'division';
    const div = num1 / num2;
    expect( component.realizarOperacion(num1, num2, operacion)).toBe(div)
  });

  it('cuando no se manda nada o algo diferente a suma, resta, multiplicacion o division', () => {
    const num1 = 27;
    const num2 = 3;
    const operacion = '';
    expect( component.realizarOperacion(num1, num2, operacion)).toBe('No ingreso ninguna operación')
  });

});
