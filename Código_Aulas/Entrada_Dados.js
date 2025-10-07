const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// rl.question("Qual seu nome? ", (resposta) => {
//     console.log(`Prazer em te conhecer, ${resposta}`);

//     rl.close();
// })

function fazerPergunta(pergunta){

    return new Promise((resolve) =>{
        rl.question(pergunta, (resposta) => {
            resolve(resposta);
        });
    })
}

async function coletarResposta(){
    const nome = await fazerPergunta("Qual o seu nome? ");
    const idade = await fazerPergunta("Qual a sua idade? ");
    const corFavorita = await fazerPergunta("Qual a sua cor favorita? ");

    console.log(`Suas respostas foram:
        Nome: ${nome}
        Idade: ${idade}
        Cor Favorita: ${corFavorita}
    `);

    const opcao = await fazerPergunta("Concorda com suas respostas? S ou N. Digite sua resposta: ");
    if(opcao == "S"){
        console.log("Suas respostas foram salvas com sucesso! Obrigado pelo seu tempo.");
    }
    else if (opcao == "N") {
        console.log("O processo deverá ser iniciado novamente.");
    }
    else {
        console.log("Opção inválida.");
    }

    rl.close();
}

coletarResposta();