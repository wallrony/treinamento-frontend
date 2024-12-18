import Conta from "./conta";

class ContaPoupanca extends Conta {
	constructor(cpf: string, numero: string, agencia: string) {
		super(cpf, numero, agencia, "poupanca");
	}
}

export default ContaPoupanca;
