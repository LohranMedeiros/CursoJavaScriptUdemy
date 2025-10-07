const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite seu primeiro número: ", (numUm) => {
    rl.question("Digite seu segundo número: ", (numDois) => {
        if(numUm > numDois){
            console.log(`O número maior é o primeiro: ${numUm}.`);
        }
        else if (numUm == numDois){
            console.log(`Ambos são iguais.`);
        }
        else {
            console.log(`O número maior é o segundo: ${numDois}.`);
        }

        rl.close();
    });
});