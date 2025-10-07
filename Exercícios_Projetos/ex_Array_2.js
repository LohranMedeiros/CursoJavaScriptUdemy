let nomes = [
  "Alice",
  "André",
  "Beatriz",
  "Bruno",
  "Bianca",
  "Caio",
  "Camila",
  "Carlos",
  "Carla",
  "Ana"
];

function executarPrograma(){
    let novoArray = nomes.filter(n => n.startsWith('A'));

    console.log(novoArray);
}

executarPrograma();