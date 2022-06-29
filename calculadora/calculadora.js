let calculadora = () => {
    const num1 = Number(prompt('Digite o 1 valor'));
    const num2 = Number(prompt('Digite o 2 valor'));

    let resultado = 0;

    const novaOp = () => {
        let opcao = Number(prompt('Deseja fazer nova operação? \n 1- Sim; \n 2- Não;'));
        if (opcao == 1) {
            calculadora();
        } else if (opcao == 2) {
            alert('FIM');
        } else {
            alert('Opção inválida tente novamente!');
            novaOp();
        }

    }

    let op = Number(prompt(`Escolha uma operação: \n 1- Soma; \n 2- Subtração; \n 3- Multiplicação; \n 4- Divisão; \n 5- Divisão inteiro; \n 6- Potenciação;`));
    console.log(op)


    let soma = () => {
        resultado = num1 + num2;
        alert(`Soma de ${num1} + ${num2} é = ${resultado}`);
        novaOp();
    }
    let subtracao = () => {
        resultado = num1 - num2;
        alert(`Subtração de ${num1} - ${num2} é = ${resultado}`);
        novaOp();
    }
    let multiplicacao = () => {
        resultado = num1 * num2;
        alert(`Multiplicação de ${num1} * ${num2} é = ${resultado}`);
        novaOp();
    }
    let divisao = () => {
        resultado = num1 / num2;
        alert(`Divisão de ${num1} / ${num2} é = ${resultado}`);
        novaOp();
    }
    let divisaoInteiro = () => {
        resultado = num1 % num2;
        alert(`Divisão inteiro  de ${num1} % ${num2} é  = ${resultado}`);
        novaOp();
    }
    let potenciacao = () => {
        resultado = num1 ** num2;
        alert(`O número ${num1} elevado ao número ${num2} é = ${resultado}`);
        novaOp();
    }
    switch (op) {
        case 1: soma(); break;
        case 2: subtracao(); break;
        case 3: multiplicacao(); break;
        case 4: divisao(); break;
        case 5: divisaoInteiro(); break;
        case 6: potenciacao(); break;
        default: {
            alert('Operação inválida, tente novamente!')
            calculadora();
        }
    }

}
calculadora();


