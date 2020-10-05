import { personajesDragonBall } from './arreglos';
describe('pruebas con arreglos', () => {
  it('debe retornar un arreglo con por lo menos tres posiciones', () => {
    const resp = personajesDragonBall();
    // expect(resp.length).toBe(3);
    expect(resp.length).toBeGreaterThanOrEqual(3);
  });
  it('debe retornar Gokú y Vegeta', () => {
    const resp = personajesDragonBall();
    expect(resp).toContain('Gokú');
    expect(resp).toContain('Vegeta');
  })
});
