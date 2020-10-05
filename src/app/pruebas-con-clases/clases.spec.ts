import { Personaje } from './clases';

describe('Pruebas con clases', () => {
  let personaje = new Personaje();
  // beforeAll(() => {
  //   console.info('beforeAll');
  // });
  beforeEach(() => {
    personaje.vida = 100;
    personaje = new Personaje();
    // console.info('beforeEach');
  });
  // afterAll(() => {
  //   console.info('afterAll');
  // });
  // afterEach(() => {
  //   console.info('afterEach');
  // });
  it('debe retornar 60 si el personaje recibe 40 de daño', () => {
    const danio = personaje.recibeDanio(40);
    expect(danio).toBe(60);
  });
  it('debe retornar 70 si recibe 30 de daño', () => {
    const danio = personaje.recibeDanio(30);
    expect(danio).toBe(70);
  });
  it('debe retornar 0 si el personaje recibe 100 o más de daño', () => {
    const danio = personaje.recibeDanio(101);
    expect(danio).toBe(0);
  });
});
