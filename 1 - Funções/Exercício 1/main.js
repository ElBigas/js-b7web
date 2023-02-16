/**
 * Este código define uma função calculaImovel que recebe dois argumentos: 
 * metragem e quartos. O objetivo da função é calcular o preço de uma casa 
 * com base na metragem e no número de quartos.
 */

function calculaImovel(metragem, quartos) {

    let m2 = 3000;
    let preco = 0;

    if (quartos === 1) {

        preco = metragem * m2;

    } else if (quartos === 2) {

        preco = metragem * (m2 * 1.2);


    } else if (quartos === 3) {

        preco = metragem * (m2 * 1.5);

    }
    
    return preco;
}

let metragem = 123;
let quartos = 3;
let preco = calculaImovel(metragem, quartos);

console.log("A casa custa R$" + preco);
