interface User {
	name: string;
}

// DTO
// Data Transfer Object
interface DTO<T> {
	data: T;
}

const dto: DTO<User> = {
	data: {
		name: "José",
	},
};

const dtoList: DTO<User[]> = {
	data: [{ name: "José" }, { name: "Pedro" }],
};

export {};
