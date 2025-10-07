function filtrarProdutos (array, min) {
   return array.filter(produto => produto.preco > min);
}

let produtos = [
   {nome: "Televisão", categoria: "Eletrônico", preco: 1500},
   {nome: "Tablet", categoria: "Eletrônico", preco: 1000},
   {nome: "Smartphone", categoria: "Eletrônico", preco: 1200},
]

const min = 1000;
const aum = 0.2;

let arrayTransformado = () => {
   let prodFiltrados = filtrarProdutos(produtos, min);

   function aplicarAumento(prod, aum){
      for (let item of prod) {
         item.preco += (item.preco * aum);
      }
      return prod; 
   }

   return aplicarAumento(prodFiltrados, aum); 
};



console.log(arrayTransformado());