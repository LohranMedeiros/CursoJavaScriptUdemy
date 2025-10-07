const { randomInt } = require("crypto");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ehLetra(char) {
  return /^[a-zA-Z]$/.test(char);
}

function criarContador(){
    let num = 0;
    return {
        add: () => num++,
        mostrar: () => num
    };
}

function encontrarLetras(palavra, letra) {
  let posicoes = [];

  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === letra) {
      posicoes.push(i);
    }
  }

  return posicoes;
}

let wordsAleatorios = ['mario', 'peach', 'luigi', 'bowser', 'buu', 'espigão', 'daisy', 'wario', 'waluigi', 'birdo', 'yoshi', 'toad'];
let palavra = wordsAleatorios[randomInt(0, wordsAleatorios.length)];
let acertos = criarContador();
let erros = criarContador();
let letrasDescobertas = [];
let posSalvas = [];

console.log("Bem-vindo ao jogo da Forca!");
console.log("Será escolhido aleatoriamente uma palavra. Tente descobrir qual é, com, no máximo, 6 tentativas!");
console.log(`A palavra possui ${palavra.length} letras. Você tem 6 tentativas.`);
forca();

function forca(){
    rl.question("Digite uma letra: ", (letra) => {
        if(!ehLetra(letra)){
            console.log("Isso não é letra.");
        }
        else {
            while (erros.mostrar() != 6 && acertos.mostrar() != palavra.length){
                if(palavra.includes(letra) && !letrasDescobertas.some(ld => ld === letra)){
                    acertos.add();

                    let pos = encontrarLetras(palavra, letra);

                    console.log("Existe a letra.");
                    
                    let string = "";

                    for (i = 0; i < palavra.length; i++){
                        if(pos.includes(i)){
                            string += palavra[i]; posSalvas.push(i); letrasDescobertas.push(letra);
                        }
                        else {
                            if(posSalvas.includes(i)){
                                string += palavra[i];
                            }
                            else {
                                string += "_";
                            }
                        }
                    }

                    console.log(string);
                    
                    if(string === palavra){
                        console.log("Parábens, você venceu!");
                        return rl.close();
                    }
                }
                else if (letrasDescobertas.some(ld => ld === letra)){
                    console.log("Letra já usada. Não conta como erro.");
                }
                else {
                    erros.add();
                    console.log("Você errou.");
                }

                if(erros.mostrar() < 6){
                    return forca();
                }
            }

            console.log("Fim de Jogo.");
        }

        rl.close();
    });
}