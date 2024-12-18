type TipoConta = "poupanca" | "corrente";

abstract class Conta {
	private cpf: string;
	private numero: string;
	private agencia: string;
	protected saldo: number = 0;
	private tipo: TipoConta;

	constructor(cpf: string, numero: string, agencia: string, tipo: TipoConta) {
		this.cpf = cpf;
		this.numero = numero;
		this.agencia = agencia;
		this.tipo = tipo;
	}

	dizerSaldo() {
		console.log(`O seu saldo é de R$ ${this.saldo}.`);
	}

	depositar(valor: number) {
		this.saldo += valor;
	}

	saque(valor: number) {
		if (this.saldo >= valor) {
			this.saldo -= valor;
			return true;
		}
		return false;
	}
}

export default Conta;
