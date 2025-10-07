// IIFE 

const sistemaNotificacao = (function(){
   let notificacoes = [];

   function adicionar (mensagem){
      notificacoes.push(mensagem);
      console.log("Notificação adicionada.");
   }

   function listar (){
      if(notificacoes.length === 0){
         console.log("Não há notificações.");
         return ;
      }

      notificacoes.forEach((notificacao, i) => {
         console.log(`${i+1} - ${notificacao}.`);
      });
   }

   return { adicionar, listar };
})();


sistemaNotificacao.adicionar("Olá, mundo!");
sistemaNotificacao.adicionar("Tudo bem? Como vai?");
sistemaNotificacao.adicionar("Fico feliz!");

sistemaNotificacao.listar();