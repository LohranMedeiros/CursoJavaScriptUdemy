const { randomInt } = require("crypto");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function jokenpo(){
    rl.question("Escolha uma das três opções (1 a 3): ", (op) => {
        let num = parseInt(op);
        let numEscolhido = randomInt(1, 4);

        if(isNaN(num) || num > 5 && num < 1){
            console.log("Número inválido.");
        }
        else {
            while (num != 4){
                if((numEscolhido == 1 && num == 3) || (numEscolhido == 3 && num == 2) || (numEscolhido == 2 && num == 1)){
                    console.log("Parábens, você venceu. Continue jogando."); 
                }
                else if((numEscolhido == 3 && num == 1) || (numEscolhido == 2 && num == 3) || (numEscolhido == 1 && num == 2)){
                    console.log("Que pena! Você perdeu. Tente novamente.");
                }
                else {
                    console.log("Empate! Tente novamente.");
                }

                return jokenpo(numEscolhido);
            }
        }

        rl.close();
    });
}

console.log("Bem-vindo ao jogo!");
console.log("Jokenpo! \n 1 - Tesoura \n 2 - Papel \n 3 - Pedra \n 4 - Parar de jogar.");
jokenpo();