import ContaCorrente from "./conta_corrente";
import ContaPoupanca from "./conta_poupanca";

// const minhaConta = new ContaPoupanca("123", "123", "asdasdadasd");
const minhaConta = new ContaCorrente("123", "123", "asdasdadasd");

minhaConta.dizerSaldo();
minhaConta.depositar(1000);
minhaConta.dizerSaldo();

console.log("SACANDO 500...");
let resultado = minhaConta.saque(500);
console.log(`Resultado do saque: ${resultado}\n`);

minhaConta.dizerSaldo();

console.log("\nSACANDO 500...");
resultado = minhaConta.saque(500);
console.log(`Resultado do saque: ${resultado}\n`);

minhaConta.dizerSaldo();
