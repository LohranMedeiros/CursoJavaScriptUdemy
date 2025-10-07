const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite um número: ", (resposta) => {
    const numero = parseInt(resposta);

    if(numero % 2 === 0){
        console.log("O número é par.");
    }
    else {
        console.log("O número é ímpar.");
    }

    rl.close();
})