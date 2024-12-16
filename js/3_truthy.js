// "" (string vazia), 0, false, undefined e null === false
const nome = null;

if (nome) {
	console.log(`Meu nome é: ${nome}`);
} else {
	console.log("Não tenho nome.");
}

// Seja lista ou objeto, eles mesmo vazios, existem reserva de memória.
const lista = [1, 2, 3];

if (lista) {
	console.log(`Minha lista de números: ${lista}`);
} else {
	console.log("A lista não existe.");
}
