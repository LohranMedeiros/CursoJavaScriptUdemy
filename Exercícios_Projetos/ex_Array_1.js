const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let convidados = [];

function perguntar(msg) {
    return new Promise(resolve => rl.question(msg, resolve));
}

// Funcionalidades Padrão
async function addConvidado() {
    const nome = await perguntar("Digite o nome do convidado: ");
    convidados.push(nome);
    console.log("Convidado adicionado.");
}

async function altConvidado() {
    if (convidados.length === 0) {
        console.log("A lista está vazia.");
        return;
    }

    console.log("Especifique o número do convidado que deseja alterar, começando pelo 1.");
    const num = parseInt(await perguntar("Digite o número: "));

    if (isNaN(num) || num < 1 || num > convidados.length) {
        console.log("Número inválido.");
        return;
    }

    console.log(`Convidado atual: ${convidados[num - 1]}`);
    const novoNome = await perguntar("Digite o novo nome: ");
    convidados[num - 1] = novoNome;
    console.log("Convidado alterado.");
}

async function rmvConvidado() {
    if (convidados.length === 0) {
        console.log("A lista está vazia.");
        return;
    }

    console.log("Especifique o número do convidado que deseja remover, começando pelo 1.");
    const num = parseInt(await perguntar("Digite o número: "));

    if (isNaN(num) || num < 1 || num > convidados.length) {
        console.log("Número inválido.");
        return;
    }

    console.log(`Convidado removido: ${convidados[num - 1]}`);
    convidados.splice(num - 1, 1);
}

async function verificarConvidado() {
    if (convidados.length === 0) {
        console.log("A lista está vazia.");
        return;
    }

    const nome = await perguntar("Digite o nome a verificar: ");
    if (convidados.includes(nome)) {
        console.log("O convidado está na lista.");
    } else {
        console.log("Convidado não encontrado.");
    }
}

function exibirConvidados() {
    if (convidados.length === 0) {
        console.log("A lista está vazia.");
        return;
    }

    const ordenados = [...convidados].sort();
    ordenados.forEach((nome, i) => {
        console.log(`${i + 1} - ${nome}`);
    });
}

function numConvidados() {
    console.log(`A lista possui ${convidados.length} convidado(s).`);
}

// Menu
function menu() {
    console.log("\nLista de Gerenciamento de Convidados:");
    console.log("1 - Adicionar Convidado");
    console.log("2 - Alterar Informação do Convidado");
    console.log("3 - Remover Convidado");
    console.log("4 - Verificar Convidado");
    console.log("5 - Listar Convidados");
    console.log("6 - Número de Convidados");
    console.log("7 - Sair do Menu");
}

// Programa Principal
async function executarPrograma() {
    let op = 0;

    while (op !== 7) {
        menu();
        const resposta = await perguntar("Escolha uma opção: ");
        op = parseInt(resposta);

        switch (op) {
            case 1:
                await addConvidado();
                break;
            case 2:
                await altConvidado();
                break;
            case 3:
                await rmvConvidado();
                break;
            case 4:
                await verificarConvidado();
                break;
            case 5:
                exibirConvidados();
                break;
            case 6:
                numConvidados();
                break;
            case 7:
                console.log("Encerrando o programa...");
                rl.close();
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
    }
}

// Iniciar
executarPrograma();
