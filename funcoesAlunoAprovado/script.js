const alunos = [
	{
		nome: 'Pedro',
		nota: 7,
		turma: '1B',
	},
	{
		nome: 'Amanda',
		nota: 10,
		turma: '1B',
	},
	{
		nome: 'Ricardo',
		nota: 5,
		turma: '2C',
	},
];

let alunosAprovados=(alunos, media)=> {
	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		let { nota, nome } = alunos[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 7));