const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número de 0 a 100 para classificar: ", (num) => {
    switch(true){
        case (num >= 90):
            console.log("Classificação A.");
            break;
        case (num >= 80 && num <= 89):
            console.log("Classificação B.");
            break;
        case (num >= 60 && num <= 79):
            console.log("Classificação C.");
            break;
        case (num >= 40 && num <= 59):
            console.log("Classificação D.");
            break;
        case (num >= 20 && num <= 39):
            console.log("Classificação E.");
            break;
        case (num <= 19):
            console.log("Classificação F.");
            break;
        default:
            console.log("Número inválido.");
            break;
    }

    rl.close();
});