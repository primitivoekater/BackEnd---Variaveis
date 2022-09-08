console.log("O seu sistema ira calcular quantas pessoas estarão infectadas após 100 dias, dado que inicialmente havia 1000 pessoas infectadas, cada uma delas transmitindo para outras 4 pessoas.");
const populacaoInfectada = 1000;
const transmissivel = 4;
const tempoPercorridoDias = 100;
const infectadas = populacaoInfectada * transmissivel ** (tempoPercorridoDias / 7 );
