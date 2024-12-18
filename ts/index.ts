import { TIPO_CONTA } from "./models/Conta";
import ContaCorrente from "./models/ContaCorrente";
import ContaPoupanca from "./models/ContaPoupanca";
import ContaService from "./services/ContaService";

// const minhaConta = new ContaPoupanca("123", "123", "asdasdadasd");
// const minhaConta = new ContaCorrente("123", "123", "asdasdadasd");

// minhaConta.dizerSaldo();
// minhaConta.depositar(1000);
// minhaConta.dizerSaldo();

// console.log("SACANDO 500...");
// let resultado = minhaConta.saque(500);
// console.log(`Resultado do saque: ${resultado}\n`);

// minhaConta.dizerSaldo();

// console.log("\nSACANDO 500...");
// resultado = minhaConta.saque(500);
// console.log(`Resultado do saque: ${resultado}\n`);

// minhaConta.dizerSaldo();

const service = new ContaService();

service.criarConta("123", "123", "123", TIPO_CONTA.CORRENTE);
console.log(service.listarContas());
console.log();
service.criarConta("456", "456", "456", TIPO_CONTA.POUPANCA);
console.log(service.listarContas());
console.log();
console.log(service.acharConta("123"));
