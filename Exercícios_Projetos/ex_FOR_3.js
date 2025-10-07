const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Forneça um número para o cálculo fatorial: ", (op) => {
    let num = parseInt(op);
    let i = 1
    let fatorial = 1;

    for(i; i <= num; i++){
        fatorial *= i;
    }

    console.log(fatorial);

    rl.close();
});