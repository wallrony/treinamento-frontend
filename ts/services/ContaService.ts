import Conta, { TIPO_CONTA, TipoConta } from "../models/Conta";
import ContaCorrente from "../models/ContaCorrente";
import ContaPoupanca from "../models/ContaPoupanca";

const contas: Conta[] = [];

class ContaService {
	criarConta(
		cpf: string,
		numero: string,
		agencia: string,
		tipo: TipoConta
	): Conta {
		let conta: Conta;
		if (tipo === TIPO_CONTA.CORRENTE) {
			conta = new ContaCorrente(cpf, numero, agencia);
		} else {
			conta = new ContaPoupanca(cpf, numero, agencia);
		}
		contas.push(conta);
		return conta;
	}

	listarContas() {
		return contas;
	}

	acharConta(cpf: string) {
		return contas.find((conta) => conta.cpf === cpf);
	}
}

export default ContaService;
