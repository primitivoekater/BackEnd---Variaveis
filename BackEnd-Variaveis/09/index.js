console.log("Faça um programa que, a partir do número de lados de um polígono, imprima na tela a soma dos seus ângulos internos");
const lados = 10
const soma = (lados - 2) * 180
console.log(`a soma dos lado internos é ${soma}`);
const valorAngulo = soma / lados;
console.log(`o valor interno de cada angulo é ${valorAngulo}` );