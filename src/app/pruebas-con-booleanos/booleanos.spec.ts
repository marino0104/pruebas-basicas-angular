import { devolverBooleanos } from './booleanos';
describe('pruebas con booleanos', () => {
  it('debe retornar verdadero', () => {
    const resp = devolverBooleanos();
    // expect(resp).not.toBeTruthy();
    expect(resp).not.toBeFalse();
  });
});
