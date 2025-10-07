const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", (op) => {
    let num = parseInt(op);
    let i = 1;

    if(isNaN(num)){
        console.log("Número inválido.");
    }
    else {
        while (i <= num){
            console.log(`O atual é ${i}.`);
            i++;
        }
    }

    rl.close();
})