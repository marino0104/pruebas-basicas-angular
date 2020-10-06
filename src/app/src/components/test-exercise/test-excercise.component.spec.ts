import { OperacionesBasicas } from './test-exercise.component';

describe('should initializate whit default data operacionesBasicas', () => {
    let operaciones = new OperacionesBasicas
    
    beforeEach(() => {
        operaciones = new OperacionesBasicas();
    });

  it('Values ​​should be nonzero', () => {
    let num1 = 0;
    let num2 = 0;
    let operacion = 'suma';
    let resp = operaciones.realizarOperacion(num1, num2, operacion);
    expect(resp).toEqual(`ninguno de los valores debe ser ${0}`)
  });

  it('should return 3 suma case', ()=> {
    let num1 = 1;
    let num2 = 2;
    let operacion = 'suma';
    let resp = operaciones.realizarOperacion(num1, num2, operacion);
    expect(resp).toEqual(3)
  });

  it('should return 4 resta case', ()=> {
    let num1 = 5;
    let num2 = 1;
    let operacion = 'resta';
    let resp = operaciones.realizarOperacion(num1, num2, operacion);
    expect(resp).toEqual(4)
  });

  it('shoul return 10 multiplicacion case', () => {
    let num1 = 5;
    let num2 = 2;
    let operacion = 'multiplicacion';
    let resp = operaciones.realizarOperacion(num1, num2, operacion);
    expect(resp).toEqual(10)
  });

  it('shoul return 6.5 division case', () => {
    let num1 = 52;
    let num2 = 8;
    let operacion = 'division';
    let resp = operaciones.realizarOperacion(num1, num2, operacion);
    expect(resp).toEqual(6.5)
  })

  it('should return message division case', ()=>{
    let num1 = 1;
    let num2 = 2;
    let operacion = 'division';
    let resp = operaciones.realizarOperacion(num1, num2, operacion);
    expect(resp).toEqual(`${num1} debe ser mayor a ${num2} `)
  });

});
