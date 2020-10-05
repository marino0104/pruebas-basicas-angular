import { incrementar } from './numeros';
describe('pruebas con números', () => {
  it('debe retornar 100 si el numero ingresado es mayor a 100', () => {
    const resp = incrementar(150);
    expect(resp).toBe(100);
  });
  it('debe retornar el número + 1 si el valor ingresado es menor a 100', () => {
    const resp = incrementar(48);
    expect(resp).toBe(49);
  });
});
