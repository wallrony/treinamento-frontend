import { TIPO_CONTA } from "./models/Conta";
import { criarIConta } from "./models/IConta";

const conta = criarIConta("123", "123", "123", TIPO_CONTA.CORRENTE);

conta.dizerSaldo();
conta.depositar(1000);
conta.dizerSaldo();
