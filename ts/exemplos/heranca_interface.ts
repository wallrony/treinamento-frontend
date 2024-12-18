interface User {
	name: string;
	age?: number;
	admin?: boolean;
}

interface Admin extends User {
	admin: true;
}

const usuarios = [
	{
		name: "José",
		age: 20,
	},
	{
		admin: true,
		name: "Pedro",
	},
] as User[];

console.log(usuarios);

const admins = usuarios.filter((user): user is Admin => user.admin ?? false);

console.log(admins);

// function userIsAdmin(user: User): user is Admin {
// 	return user.admin ?? false;
// }

// usuarios.forEach((user) => {
// 	if (userIsAdmin(user)) {
// 		console.log(`O usuário ${user.name} é um admin.`);
// 	} else {
// 		console.log(`O usuário ${user.name} não é um admin.`);
// 	}
// });

export {};
