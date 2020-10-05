export class operacionesBasicas {

  // se reciben dos números, con estos 2 números debemos seleccionar una operación básica. Ninguno de los dos números debe ser 0
  realizarOperacion ( num1: number, num2: number, operacion: string ){
    if (num1 === 0 || num2 === 0 ){
      return `ninguno de los valores debe ser ${0}`;
    }else{
      if (operacion === 'suma'){
        return num1 + num2;
      }else if ( operacion === 'resta' ){
        return num1 - num2;
      }
      else if ( operacion === 'multiplicacion' ){
        return num1 * num2;
      }else if ( operacion === 'division' ){
        if (num1 < num2){
          return `${num1} debe ser mayor a ${num2} `;
        }else{
          return num1 / num2;
        }
      }
    }
  }
}
