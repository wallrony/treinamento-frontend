interface User {
	name: string;
	age: number;
}

interface Funcionario {
	horarioEntrada: string;
	horarioSaida: string;
}

type Empregado = User & Funcionario;

const jose: Empregado = {
	age: 20,
	name: "José",
	horarioEntrada: "",
	horarioSaida: "",
};
