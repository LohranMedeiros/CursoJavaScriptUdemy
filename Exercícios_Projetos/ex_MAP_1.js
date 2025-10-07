const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let mapaContatos = new Map();

function perguntar(msg){
  return new Promise(resolve => rl.question(msg, resolve));
}

async function addContato(){
  let nome = await perguntar("Digite o nome do contato: ");
  let numero = await perguntar("Digite o numero de telefone do contato: ");

  mapaContatos.set(nome, numero);
  console.log("Contato " + nome + " adicionado.");
};

async function removerContato(){
  let nome = await perguntar("Digite o nome do contato a remover: ");
  mapaContatos.delete(nome);
  console.log("Contato " + nome + " removido.");
}

function exibirContatos(){
  for(let [chave, valor] of mapaContatos){
    console.log(`Contato: ${chave}, Telefone: ${valor}`);
  }
}

function menu() {
    console.log("\nGerenciamento de Contatos:");
    console.log("1 - Adicionar Contato");
    console.log("2 - Remover Contato");
    console.log("3 - Exibir Contatos");
    console.log("4 - Sair do Menu");
}

async function registro(){
  let op = 0;

  while(op != 4){
    menu();
    op = parseInt(await perguntar("Escolha uma das opções: "));

    switch(op){
      case 1:
        await addContato();
        break;
      case 2:
        await removerContato();
        break;
      case 3:
        exibirContatos();
        break;
      case 4:
        rl.close();
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
        break;
    }
  }
}

registro();