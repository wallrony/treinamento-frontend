import ViaCepService from "./ViaCepService";

async function getAddress(cep: string) {
	try {
		const service = new ViaCepService();
		const endereco = await service.find(cep);
		console.log(endereco.logradouro);
	} catch (error) {
		console.log("Ocorreu um erro inesperado:", error);
	}
}

getAddress("57302250");
