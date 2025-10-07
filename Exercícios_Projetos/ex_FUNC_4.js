let estoque = {
   caneta: 10,
   papel: 5,
}

function ajuste (nome, quantidade) {

   if(quantidade > 0){
      function incrementar () {
         estoque[nome] += quantidade;
         console.log(`De ${nome}, foram adicionados ${quantidade}. Quantidade atual: ${estoque[nome]}.`);
      }

      return incrementar();
   }
   else {
      function decrementar () {
         estoque[nome] += quantidade;
         console.log(`De ${nome}, foram retirados ${quantidade}. Quantidade atual: ${estoque[nome]}.`);
      }

      return decrementar();
   }
}

ajuste ("caneta", 2);
ajuste ("papel", -5);