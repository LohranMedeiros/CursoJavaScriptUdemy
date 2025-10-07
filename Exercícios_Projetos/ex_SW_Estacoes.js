const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Escolha um mês (1 a 12): ", (mes) => {
    // switch (true) {
    //     case (mes >= 4 && mes <= 6):
    //         console.log("A estação do ano é outono.");
    //         break;
    //     case (mes >= 7 && mes <= 9):
    //         console.log("A estação do ano é inverno.");
    //         break;
    //     case (mes >= 10 && mes <= 12):
    //         console.log("A estação do ano é primavera.");
    //         break;
    //     case (mes >= 1 || mes <= 3):
    //         console.log("A estação do ano é verão.");
    //         break;
    // }

    let num = parseInt(mes);

    switch(num){
        case 12:
        case 1:
        case 2:
            console.log("A estação do ano é verão.");
            break;
        case 3:
        case 4:
        case 5:
            console.log("A estação do ano é outono.");
            break;
        case 6:
        case 7:
        case 8:
            console.log("A estação do ano é inverno.");
            break;
        case 9:
        case 10:
        case 11:
            console.log("A estação do ano é primavera.");
            break;
        default:
            console.log("Mês inválido.");
            break;
    }

    rl.close();
});