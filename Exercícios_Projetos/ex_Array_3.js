const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let compras = [];

function addItem(nome){
    compras.push(nome);
    console.log("Item adicionado.");
}

function rmvItem(index){
    console.log(index);
    if(index >= 0 && index < compras.length){
        const itemRemovido = compras.splice(index, 1);
        console.log(`Item ${itemRemovido} removido.\n`);
    }
    else {
        console.log("Índice inválido");
    }
}

function exibirItens(){
    if(compras.length != 0){
        console.log("Os itens na lista são: ");
        for(i = 0; i < compras.length; i++){
            console.log((i+1) + " - " + compras[i]);
        }
    }
    else {
        console.log("A lista está vazia.")
    }
}

// Menu
function menu() {
    console.log("\nLista de Compras:");
    console.log("1 - Adicionar Item");
    console.log("2 - Remover Item");
    console.log("3 - Exibir Itens");
    console.log("4 - Sair do Menu");
}

// Programa Principal
async function executarPrograma() {
    menu();

    rl.question("Escolha uma das opções: ", (op) => {
        
        switch(op){
            case '1': 
                rl.question("Digite o nome do item para adicionar: ", (nome) => {
                    addItem(nome);

                    executarPrograma();
                });
                break;
            case '2':
                rl.question("Digite o número do item para excluir: ", (num) => {
                    let index = (parseInt(num) - 1);
                    
                    rmvItem(index);

                    executarPrograma();
                });
                break;
            case '3':
                exibirItens();
                executarPrograma();
                break;
            case '4':
                console.log("Programa encerrado.");
                rl.close();
                break;
            default:
                console.log("Inválido. Tente novamente.");
                executarPrograma();
                break;
        }
    });
}

// Iniciar
executarPrograma();
