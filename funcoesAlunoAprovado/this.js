let calculaIdade=(anos)=> {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Ruthe',
	idade: 22,
};

const pessoa2 = {
	nome: 'Gabriel',
	idade: 13,
};

const pessoa3 = {
	nome: 'Júlia',
	idade: 11,
};

console.log(calculaIdade.call(pessoa3, 20));
console.log(calculaIdade.apply(pessoa1, [15]));