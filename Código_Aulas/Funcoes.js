// Funções Básicas

// function soma(a, b){
//     return a + b;
// }

// function saudacao(nome){
//     return console.log(`Olá, ${nome}.`);
// }

// function vIP(a){
//     if(a % 2 == 0){
//         return console.log("Número par.");
//     }
//     else {
//         return console.log("Número par.");
//     }
// }

// let resultado = soma(5, 3);
// console.log(`O resultado é: ${resultado}.`);

// saudacao("Lohran");
// vIP(11);

// Função Anônima

// const quadrado = function(numero){
//     return numero * numero;
// }

// let resultado = quadrado(4);
// console.log(resultado);

// // Concatenação de String
// const concat = function (str1, str2){
//     return str1 + ' ' + str2;
// }

// let mensagem = concat("Olá,", "Mundo");
// console.log(mensagem);

// // verificar positivo/negativo

// const vSinal = function (numero) {
//     if(numero > 0){
//         return "positivo";
//     }
//     else if(numero < 0){
//         return "negativo";
//     }
//     else {
//         return "zero";
//     }
// }

// console.log(`10 é ${vSinal(10)}`);
// console.log(`-1 é ${vSinal(-1)}`);
// console.log(`0 é ${vSinal(0)}`);

// // Arrow Functions

// const mult = (num1, num2) => num1 * num2;
// console.log(mult(5, 3));

// let array = [1, 2, 3, 4, 5];
// const numeros = array.filter(numero => numero % 2 !== 0);
// console.log(numeros);

// let frutas = ["Maça", "Banana", "Laranja", "Limão"];
// const frutasMaiusc = frutas.map(fruta => fruta.toUpperCase());
// console.log(frutasMaiusc);

// Função de alta ordem -> Funções que possuem funções como argumentos/resultados

function aplicarOperacao(numeros, operacao) {
    let resultado = [];

    for (let numero of numeros) {
      resultado.push(operacao(numero));
    }

    return resultado;
}

function dobrar(valor) {
return valor * 2;
}

function incrementar(valor) {
return valor + 1;
}

let array_numeros = [1, 2, 3, 4, 5];
let numerosDobrados = aplicarOperacao(array_numeros, dobrar);

