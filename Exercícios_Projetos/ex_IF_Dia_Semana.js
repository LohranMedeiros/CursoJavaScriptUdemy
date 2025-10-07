const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Segue-se os dias da semana:\n 1-Domingo\n 2-Segunda\n 3-Terça\n 4-Quarta\n 5-Quinta\n 6-Sexta\n 7-Sábado.");

rl.question("Digite o número do dia da semana: ", (resposta) => {
    const numero = parseInt(resposta);

    if(numero == 1){console.log("Hoje é domingo.");}
    else if(numero == 2){console.log("Hoje é segunda");}
    else if(numero == 3){console.log("Hoje é terça.");}
    else if(numero == 4){console.log("Hoje é quarta.");}
    else if(numero == 5){console.log("Hoje é quinta.");}
    else if(numero == 6){console.log("Hoje é sexta.");}
    else if(numero == 7){console.log("Hoje é sábado.");}
    else {
        console.log("Inserção inválida.");
    }

    rl.close();
});