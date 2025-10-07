const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", (numUm) => {
    rl.question("Digite outro número: ", (numDois) => {
        rl.question("O que deseja fazer? Soma (+), Subtrair (-), Multiplicar (*) ou Dividir (/). Escolha a opção: ", (op) => {
            const numeroUm = parseFloat(numUm), numeroDois = parseFloat(numDois);
            if(op === "+"){
                let resultado = numeroUm + numeroDois;
                console.log(`O resultado da soma é: ${resultado}.`);
            }
            else if(op === "-"){
                let resultado = numeroUm - numeroDois;
                console.log(`O resultado da subtração é: ${resultado}.`);
            }
            else if(op === "*"){
                let resultado = numeroUm * numeroDois;
                console.log(`O resultado da multiplicação é: ${resultado}.`);
            }
            else if(op === "/"){
                if(numeroDois !== 0){
                    let resultado = numeroUm / numeroDois;
                    console.log(`O resultado da divisão é: ${resultado}.`);
                }
                else {
                    console.log("Divisor 0. Divisão não permitida.")
                }
            }
            else {
                console.log("Operação inválida.")
            }

            rl.close();
        });
    });
});