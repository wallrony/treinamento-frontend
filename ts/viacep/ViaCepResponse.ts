export interface ViaCepSuccessResponse {
	cep: string;
	logradouro: string;
	complemento: string;
	unidade: string;
	bairro: string;
	localidade: string;
	uf: string;
	estado: string;
	regiao: string;
	ibge: string;
	gia: string;
	ddd: string;
	siafi: string;
	erro?: false;
}

export interface ViaCepErrorResponse {
	erro: true;
}
