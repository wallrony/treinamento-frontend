const TIPO_CONTA = {
	CORRENTE: "corrente",
	POUPANCA: "poupanca",
} as const;

type TipoConta = typeof TIPO_CONTA.CORRENTE | typeof TIPO_CONTA.POUPANCA;

abstract class Conta {
	#cpf: string;
	#numero: string;
	#agencia: string;
	protected _saldo: number = 0;
	#tipo: TipoConta;

	constructor(cpf: string, numero: string, agencia: string, tipo: TipoConta) {
		this.#cpf = cpf;
		this.#numero = numero;
		this.#agencia = agencia;
		this.#tipo = tipo;
	}

	get cpf() {
		return this.#cpf;
	}

	dizerSaldo() {
		console.log(`O seu saldo é de R$ ${this._saldo}.`);
	}

	depositar(valor: number) {
		this._saldo += valor;
	}

	saque(valor: number) {
		if (this._saldo >= valor) {
			this._saldo -= valor;
			return true;
		}
		return false;
	}
}

export default Conta;
export { TipoConta, TIPO_CONTA };
