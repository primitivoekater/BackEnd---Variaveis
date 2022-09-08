console.log("Suponha que você está trabalhando no desenvolvimento de um app para smart watch que calcula a velocidade média de uma pessoa que está usando o dispositivo numa corrida. Calcule a velocidade média dessa pessoa a partir da distância percorrida pela pessoa e pelo tempo que passou");
const distancia = 100;
const tempo = 100;
const velocidadeKpH = distancia / tempo;
const velocidadeMpS = velocidadeKpH * 3.6
console.log(`sua velocidade foi ${velocidadeMpS} kilometros por hora.` );