const { randomInt } = require("crypto");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function adivinhar(numEscolhido){
    rl.question("Digite um número de 1 a 100 para adivinhar: ", (op) => {
        let num = parseInt(op);

        if(isNaN(num) || num > 100 && num < 1){
            console.log("Número inválido.");
        }
        else {
            while (numEscolhido != num){
                console.log(`Número errado. Tente novamente.`);
                return adivinhar(numEscolhido);
            }

            console.log("Acertou! Parabéns.");
        }

        rl.close();
    });
}

let numEscolhido = randomInt(100);
console.log(numEscolhido);
adivinhar(numEscolhido);