import { ViaCepErrorResponse, ViaCepSuccessResponse } from "./ViaCepResponse";

class ViaCepService {
	async find(cep: string) {
		const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
		const result = (await response.json()) as
			| ViaCepSuccessResponse
			| ViaCepErrorResponse;
		if (result.erro) {
			throw Error("CEP inválido!");
		}
		return result;
	}
}

export default ViaCepService;
