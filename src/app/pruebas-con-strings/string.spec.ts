import { message } from './string';

describe('pruebas con string', () => {
  it('debe retornar un string', () => {
    const msg = message('Marino');
    expect(typeof msg).toBe('string');
  });
  it('debe retornar un nombre como parametro', () => {
    const nombre = 'Marino';
    const msg = message(nombre);
    expect(msg).toContain(nombre);
  });
});
