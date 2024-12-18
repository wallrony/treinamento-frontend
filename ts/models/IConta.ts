import { TipoConta } from "./Conta";

export interface IConta {
	cpf: string;
	numero: string;
	agencia: string;
	saldo: number;
	tipo: TipoConta;

	dizerSaldo: () => void;
	depositar: (valor: number) => void;
	saque: (valor: number) => boolean;
}

const TAXA_SAQUE = 5;

export function criarIConta(
	cpf: string,
	numero: string,
	agencia: string,
	tipo: TipoConta
): IConta {
	return {
		cpf,
		numero,
		agencia,
		saldo: 0,
		tipo,
		depositar(valor) {
			this.saldo += valor;
		},
		dizerSaldo() {
			console.log(`O saldo é de R$ ${this.saldo}`);
		},
		saque(valor) {
			let valorSaqueFinal = valor;
			if (this.tipo === "corrente") {
				valorSaqueFinal += TAXA_SAQUE;
			}
			if (this.saldo >= valorSaqueFinal) {
				this.saldo -= valorSaqueFinal;
				return true;
			}
			return false;
		},
	};
}
