const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let produtos = [];

function perguntar(msg){
  return new Promise(resolve => rl.question(msg, resolve));
}

async function addProduto(){
  let nome = await perguntar("Digite o nome do produto: ");
  let preco = await perguntar("Digite o preço do produto: ");
  let quantidade = await perguntar("Digite a quantidade do produto: ");

  let novoProduto = {
    nome, preco, quantidade
  }

  produtos.push(novoProduto);
  console.log("Produto adicionado.");
};

async function altPreco(){
  let nome = await perguntar("Digite o nome do produto a alterar: ");
  let produtoAlterar = produtos.find(p => p.nome === nome);
  if(produtoAlterar){
    let novoPreco = parseFloat(await perguntar("Digite o novo preço: "));
    produtoAlterar.preco = novoPreco;
    console.log(`O preço do produto ${nome} foi alterado.`);
  }
  else {
    console.log("Produto não encontrado.");
  }  
};

async function altQuantidade(){
  let nome = await perguntar("Digite o nome do produto a alterar: ");
  let produtoAlterar = produtos.find(p => p.nome === nome);
  if(produtoAlterar){
    let novaQuantidade = parseFloat(await perguntar("Digite a nova quantidade: "));
    
    produtoAlterar.quantidade = novaQuantidade;
    console.log(`A quantidade do produto ${nome} foi alterado.`);
  }
  else {
    console.log("Produto não encontrado.");
  }
};


async function removerProduto(){
  let nome = await perguntar("Digite o nome do produto a excluir: ");
  produtos = produtos.filter(p => p.nome === nome);
  let bool = produtos.find(p => p.nome === nome);
  if(bool){
    console.log(`Produto ${nome} foi excluído.`);
  }
  else {
    console.log("Produto não encontrado.");
  }
}

function exibirProdutos(){
  console.log("Produtos Registrados: ");

  produtos.forEach(p => {
    console.log(`Nome: ${p.nome}, Preço: ${p.preco}, Quantidade: ${p.quantidade}`);
  });
}

function menu() {
    console.log("\nControle de Estoque de Produtos:");
    console.log("1 - Adicionar Produto");
    console.log("2 - Alterar Preço");
    console.log("3 - Alterar Quantidade");
    console.log("4 - Remover Produto");
    console.log("5 - Exibir Produtos");
    console.log("6 - Sair do Menu");
}

async function registro(){
  let op = 0;

  while(op != 6){
    menu();
    op = parseInt(await perguntar("Escolha uma das opções: "));

    switch(op){
      case 1:
        await addProduto();
        break;
      case 2:
        await altPreco();
        break;
      case 3:
        await altQuantidade();
        break;
      case 4:
        await removerProduto();
        break;
      case 5:
        exibirProdutos();
        break;
      case 6:
        rl.close();
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
        break;
    }

  }
}

registro();