// Índices     0  1  2  3
const notas = [6, 8, 5, 10];

const temNotaAcimaDe7 = notas.some((valor) => valor >= 7);

console.log(`O aluno tem uma nota maior que 7? ${temNotaAcimaDe7}`);

const todasNotasSaoBaixas = notas.every((valor) => valor < 7);

console.log(`Todas as notas do aluno são baixas? ${todasNotasSaoBaixas}`);

// Todas as notas maiores ou iguals a 7.
// [8, 10]
const notasAltas = notas.filter((valor) => valor >= 7);

console.log(`Notas altas do aluno: ${notasAltas.join(", ")}`);

// Todas as notas menores que 7.
// [6, 5]
const notasBaixas = notas.filter((valor) => valor < 7);

console.log(`Notas baixas do aluno: ${notasBaixas.join(", ")}`);

const notasComPontoExtra = notas.map((valor) => {
	if (valor < 7) {
		return valor + 1;
	}
	return valor;
});

console.log("Notas com ponto extra:", notasComPontoExtra);

// ##### Reduce

const soma = notas.reduce((soma, nota) => {
	return soma + nota;
});
const media = soma / notas.length;

console.log("A soma das notas é:", soma);
console.log("A média do aluno é:", media);

// ##### Reduce
