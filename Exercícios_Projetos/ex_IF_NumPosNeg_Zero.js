const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", (numero) => {
    if(numero > 0){
        console.log(`Número positivo. O número é: ${numero}.`);
    }
    else if(numero < 0){
        console.log(`Número negativo. O número é: ${numero}.`);
    }
    else {
        console.log(`Número igual a 0.`);
    }

    rl.close();
})