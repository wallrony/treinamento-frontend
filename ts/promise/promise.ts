interface User {
	name: string;
}

function getUser() {
	return new Promise<User>((resolve, reject) => {
		setTimeout(() => {
			resolve({ name: "José" });
			// reject("ERRO ALEATORIO");
		}, 2000);
	});
}

async function imprimirUsuario() {
	try {
		const user = await getUser();

		console.log(user);
	} catch (error) {
		console.log("ERRO:", error);
	} finally {
		console.log("EXECUÇÃO FINALIZADA.");
	}
}

imprimirUsuario();
