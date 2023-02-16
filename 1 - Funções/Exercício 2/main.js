/**
 * Este código define uma função chamada 'validar' que recebe 
 * dois argumentos: 'usuario' e 'senha'. Essa função verifica se 
 * o usuário e a senha passados como argumentos são iguais 
 * a um usuário e senha predefinidos ('ElBigas' e 1234, 
 * respectivamente). Se os argumentos forem iguais, a 
 * função retorna true, caso contrário, ela retorna false.
 * 
 * Em seguida, a função é chamada com os valores 'ElBigas' 
 * e 1234, e o resultado é armazenado na variável 'validacao'.
 * Depois, um bloco if verifica se o valor de 'validacao' é true, 
 * o que significa que a função validar retornou true, ou seja, 
 * o acesso foi concedido. Se o valor de 'validacao' for false, 
 * o bloco else é executado e uma mensagem de acesso negado é 
 * exibida no console.
 */

function validar(usuario, senha) {

    if(usuario === 'ElBigas' &&
    senha === 1234) {

        return true;

    } else {

        return false;
    }
}

let usuario = 'ElBigas';
let senha = 1234;
let validacao = validar(usuario, senha)

if(validacao) {

    console.log('Acesso concedido!')
} else {

    console.log('Acesso NEGADO!')
}
