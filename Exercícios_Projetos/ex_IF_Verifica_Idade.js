const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Qual a sua idade? Resposta: ", (resposta) => {
    if(resposta >= 18){
        console.log(`Você é maior de idade.`);
    }
    else {
        console.log(`Você não é maior de idade.`);
    }

    rl.close();
})