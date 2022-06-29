const somaNumeros = (a, b) => {
      
    const soma = a + b;

    let iguais;
    let num10;
    let num20;

    (a === b) ? iguais = "" : iguais = "não ";

    (soma > 10) ? num10 = "maior" : num10 = "menor";

    (soma > 20) ? num20 = "maior" : num20 = "menor";

    
    return `Os números ${a} e ${b} ${iguais} são iguais. Sua soma é ${soma}, que é ${num10} que 10 e ${num20} que 20 `;
}
somaNumeros(5, 7)