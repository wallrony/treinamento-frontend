const notas = [6, 8, 5, 10];
notas[0]; // 6
notas[1]; // 8
notas[2]; // 5
notas[3]; // 10

function criarObjeto(nome) {
	return {
		nome: nome,
		dizerOla: function () {
			console.log("Olá! Meu nome é", this.nome);
		},
	};
}

// JSON
// JavaScript Object Notation
const rony = criarObjeto("Rony");
const jose = criarObjeto("Jose");

rony.dizerOla();
jose.dizerOla();
