function pessoa(nome) {
	this.nome = nome;

	this.dizerOla = () => {
		console.log("Olá! Meu nome é", this.nome);
	};

	return this;
}

const rony = pessoa("Rony");

rony.dizerOla();
