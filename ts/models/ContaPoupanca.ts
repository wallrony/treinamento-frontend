import Conta, { TIPO_CONTA } from "./Conta";

class ContaPoupanca extends Conta {
	constructor(cpf: string, numero: string, agencia: string) {
		super(cpf, numero, agencia, TIPO_CONTA.POUPANCA);
	}
}

export default ContaPoupanca;
