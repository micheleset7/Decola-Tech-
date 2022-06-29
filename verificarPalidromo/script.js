// solução 1
let verificaPalindromo=(string)=> {
	if (!string) return;
	console.log(string === string.split('').reverse().join(''));
}
verificaPalindromo('amar');

// solução 2

let varificaPalindromo2=(string)=> {
	if (!string) return;
	if (!string.length) return;

	for (var i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return console.log(false);
		}
	}
	return console.log(true);
}

varificaPalindromo2('ama');