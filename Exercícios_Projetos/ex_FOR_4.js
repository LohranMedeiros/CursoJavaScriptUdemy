const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Forneça um número para a tabuada: ", (op) => {
    let num = parseInt(op);
    let i = 1
    let resultado = 0;

    if(!isNaN(num)){
        for(i; i <= 10; i++){
            resultado = num * i;
            console.log(`${num} * ${i} = ${resultado}.`);
        }
    }
    else {
        console.log("Digite um número válido.");
    }

    rl.close();
});