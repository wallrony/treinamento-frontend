class Conta {
	#cpf;
	#numero;
	#agencia;
	#saldo = 0;

	constructor(cpf, numero, agencia) {
		this.#cpf = cpf;
		this.#numero = numero;
		this.#agencia = agencia;
	}

	depositar(valor) {
		this.#saldo = this.#saldo + valor;
	}

	dizerSaldo() {
		console.log(`Seu saldo é de R$ ${this.#saldo}`);
	}

	get saldo() {
		return this.#saldo;
	}

	get cpf() {
		return this.#cpf;
	}

	set cpf(novoCpf) {
		if (typeof novoCpf !== "string") {
			throw TypeError("O CPF precisa ser do tipo 'string'.");
		}
		if (novoCpf.length !== 11) {
			throw Error("O CPF deve conter 11 caracteres.");
		}
		this.#cpf = novoCpf;
	}

	static dizerAgenciaPadrao() {
		console.log("A agencia padrão é 0001.");
	}
}

// const conta = new Conta("123", "101", "123");

// conta.dizerSaldo();
// conta.depositar(1000);
// conta.dizerSaldo();

// console.log(`O meu saldo é de ${conta.saldo} e pretedo depositar mais 500.`);

// console.log("Meu CPF é:", conta.cpf);

// conta.cpf = "12312412111";

// console.log("Meu CPF é:", conta.cpf);

// Conta.dizerAgenciaPadrao();

class ContaCorrente extends Conta {
	get tipo() {
		return "Corrente";
	}
}

class ContaPoupanca extends Conta {
	get tipo() {
		return "Poupança";
	}
}

const ccr = new ContaCorrente("123", "101", "123");
const cpp = new ContaPoupanca("123", "101", "123");

console.log("Tipo da conta:", ccr.tipo);
console.log("Tipo da conta:", cpp.tipo);
