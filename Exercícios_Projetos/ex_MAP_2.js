const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let mapaReservas = new Map();

function perguntar(msg){
  return new Promise(resolve => rl.question(msg, resolve));
}

async function addReserva(){
  let horario = await perguntar("Digite o horário da reserva: ");
  let evento = await perguntar("Digite o evento da reserva: ");
  let sala = await perguntar("Digite o numero da sala da reserva: ");

  if(!mapaReservas.has(horario)){
    mapaReservas.set(horario, [{evento, sala}]);
    console.log("Reserva para " + evento + " na sala " + sala + " às " + horario + " foi efetuada com sucesso.");
  }
  else {
    const reservaHorario = mapaReservas.get(horario);
    const reservaExistente = reservaHorario.find(r => r.sala === sala);

    if(!reservaExistente){
      reservaHorario.push({evento, sala});
      console.log("Reserva para " + evento + " na sala " + sala + " às " + horario + " foi efetuada com sucesso.");
    }
    else {
      console.log("Já existe uma reserva para " + evento + " na sala " + sala + " às " + horario + ".");
    }
  }
};

async function verificarDisponibilidade() {
  let sala = await perguntar("Digite o numero da sala da reserva: ");
  let horario = await perguntar("Digite o horário da reserva: ");
  
  if (!mapaReservas.has(horario)) {
    console.log(`A sala ${sala} está disponível às ${horario}.`);          
  } else {
    const reservasHorario = mapaReservas.get(horario);            
    const reservaSala = reservasHorario.find(reserva => reserva.sala === sala);

    if (!reservaSala) {            
      console.log(`A sala ${sala} está disponível às ${horario}.`);
    } else {            
      console.log(`A sala ${sala} está ocupada às ${horario}.`);    
    }
  }
}

async function removerReserva(){
  let evento = await perguntar("Digite o evento da reserva: ");

  let removido = false;

  // forEach está no modo (valor, horário)
  mapaReservas.forEach((reserva, horario) => {
    let indice = reserva.findIndex(r => r.evento === evento);

    if(indice !== -1){
      reserva.splice(indice, 1);

      removido = true;

      console.log(`Reserva para "${evento}" cancelada.`);

      if (reserva.length === 0) {
        mapaReservas.delete(horario);
      }
    }
  });

  if (!removido) {
    console.log(`Evento "${evento}" não encontrado.`);
  }
}

function exibirReservas(){
  if(mapaReservas.size !== 0){
    console.log("Lista de reservas:");
    mapaReservas.forEach((reservasHorario, horario) => {
      reservasHorario.forEach(reserva => {
          console.log(`Evento: ${reserva.evento}, Sala: ${reserva.sala}, Horário: ${horario}`);
      
      });
    });
  }
  else {
    console.log("Não há reservas.");
  }
}

function menu() {
    console.log("\nGerenciamento de Reservas para Eventos:");
    console.log("1 - Adicionar Reserva");
    console.log("2 - Remover Reserva");
    console.log("3 - Verificar Disponibilidade");
    console.log("4 - Exibir Reservas");
    console.log("5 - Sair do Menu");
}

async function registro(){
  let op = 0;

  while(op != 5){
    menu();
    op = parseInt(await perguntar("Escolha uma das opções: "));

    switch(op){
      case 1:
        await addReserva();
        break;
      case 2:
        await removerReserva();
        break;
      case 3:
        await verificarDisponibilidade();
        break;
      case 4:
        exibirReservas();
        break;
      case 5:
        rl.close();
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
        break;
    }
  }
}

registro();