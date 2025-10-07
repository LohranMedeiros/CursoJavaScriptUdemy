// Closure

function meuCarrinho () {
   let itens = [];

   return {
      addItem: function (nomeProduto, precoProduto, quantidadeProduto) {
         itens.push({
            nome: nomeProduto, 
            preco: precoProduto,
            quantidade: quantidadeProduto
         });
      },

      rmvItem: function (nome){
         itens = itens.filter(item => item.nome !== nome);
      },

      calcTotal: function () {
         let resultado = itens.reduce((soma, item) => soma + (item.preco * item.quantidade), 0);
         console.log(`O total do carrinho é: ${resultado}`);
      },

      listaItens: function () {
         itens.forEach((item, i) => {
            console.log(`${i+1} - ${item.nome} / ${item.preco} / ${item.quantidade}`);
         });
      }
   }
}

let carrinhoL = meuCarrinho();
carrinhoL.addItem("Maçã", 2, 6);
carrinhoL.addItem("Leite", 4.5, 2);
carrinhoL.addItem("Miojo", 1.5, 8);

carrinhoL.listaItens();

carrinhoL.calcTotal();

carrinhoL.rmvItem("Maçã");
carrinhoL.listaItens();
carrinhoL.calcTotal();

let carrinhoM = meuCarrinho();

carrinhoM.addItem("Margarina", 2.5, 4);
carrinhoM.addItem("Doritos - 200g", 13, 1);
carrinhoM.addItem("Pasta de dente Sorriso", 2, 6);

carrinhoM.calcTotal();
carrinhoM.listaItens();

carrinhoL.addItem("Sorvete Napolitano", 23, 1);
carrinhoL.calcTotal();
carrinhoL.listaItens();
