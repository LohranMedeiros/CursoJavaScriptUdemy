const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let filmes = new Set();

function perguntar(msg){
  return new Promise(resolve => rl.question(msg, resolve));
}

async function addFilme(){
  let nome = await perguntar("Digite o nome do filme: ");
  
  if(!filmes.has(nome)){
    filmes.add(nome);
    console.log("Filme adicionado à lista de favoritos.");  
  }
  else {
    console.log("Filme já foi adicionado à lista");
  }
};


async function removerFilme(){
  let nome = await perguntar("Digite o nome do filme: ");

  if(filmes.has(nome)){
    filmes.delete(nome);
    console.log("Filme deletado da lista.");
  }
  else {
    console.log("Filme não encontrado.");
  }
}

function exibirFilmes(){
  if(filmes.size !== 0){
    console.log("Lista de Filmes:");
    let i = 1;
    filmes.forEach(filme => {
      console.log(`${i++} - ${filme}.`);
    });
  }
  else {
    console.log("Nenhum filme encontrado.");
  }
}

function menu() {
    console.log("\nLista de Filmes Favoritos:");
    console.log("1 - Adicionar Filme");
    console.log("2 - Remover Filme");
    console.log("3 - Exibir Filmes");
    console.log("4 - Sair do Menu");
}

async function registro(){
  let op = 0;

  while(op != 4){
    menu();
    op = parseInt(await perguntar("Escolha uma das opções: "));

    switch(op){
      case 1:
        await addFilme();
        break;
      case 2:
        await removerFilme();
        break;
      case 3:
        exibirFilmes();
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