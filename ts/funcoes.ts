import Calculadora from "./calculadora";

const numeroA = 5123;
const numeroB = 10;
const somaNumeros = new Calculadora().soma(numeroA, numeroB);

console.log(`A soma de ${numeroA} e ${numeroB} é igual a ${somaNumeros}`);
