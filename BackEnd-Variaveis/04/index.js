console.log("Se um capital de R$1000 é aplicado durante 5 meses no sistema de juros compostos sob uma taxa mensal fixa de 12,5%, qual será o valor do montante?")
const capital = 1000;
const taxFixaDeJuros = 12.5 / 100;
const meses = 5;
const montante = capital * (1 + taxFixaDeJuros) ^ meses;
console.log(`o montante total será de ${montante}` )