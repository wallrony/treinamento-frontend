import Conta from "./conta";

const TAXA_SAQUE = 5;

class ContaCorrente extends Conta {
	constructor(cpf: string, numero: string, agencia: string) {
		super(cpf, numero, agencia, "corrente");
	}

	saque(valor: number): boolean {
		const valorSaqueFinal = valor + TAXA_SAQUE;
		return super.saque(valorSaqueFinal);
	}
}

export default ContaCorrente;
