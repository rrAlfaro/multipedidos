async function search(users, value) {
	let result = users.find((user) => {
		for (let key in user) {
			if (user[key] === value) return user;
		}
	});

	if (!result) throw new Error(`Não foram encontrados resultados para sua busca: ${value}`);
	return result;
}

const usersList = [
	{
		name: "Maria Silva",
		age: 20,
		email: "maria.silva@gmail.com",
	},
	{
		name: "Ana Costa",
		age: 32,
		email: "ana.costa@gmail.com",
	},
	{
		name: "João Lima",
		age: 18,
		email: "joao.lima@gmail.com",
	},
	{
		name: "Rafael Alfaro",
		age: 28,
		email: "rafael.alfaro@gmail.com",
	},
	{
		name: "Lucas Silva",
		age: 20,
		email: "luscas.silva@gmail.com",
	},
];

search(usersList, 'Rafael Alfaro')
	.then((res) => console.log(res))
	.catch((e) => console.log(e))
