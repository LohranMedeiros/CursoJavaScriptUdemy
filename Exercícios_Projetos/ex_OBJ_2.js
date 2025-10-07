const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let aluno = {}

function perguntar(msg) {
    return new Promise(resolve => rl.question(msg, resolve));
}

async function atribuirDados(nome, idade, curso, notaMat, notaFis, notaQui){
  aluno.nome = nome;
  aluno.idade = idade;
  aluno.curso = curso;
  aluno.notas = {};
  aluno.notas.matematica = parseFloat(notaMat);
  aluno.notas.fisica = parseFloat(notaFis);
  aluno.notas.quimica = parseFloat(notaQui);
}

function calcularMedia(aluno){
  let totalNotas = 0, numNotas = 0;

  for (let materia in aluno.notas){
    totalNotas += aluno.notas[materia];
    numNotas++;
  }

  let mediaFinal = totalNotas / numNotas;

  return mediaFinal;
}

async function solicitarInformacao(){
  const nome = await perguntar("Digite o nome do aluno: ");

  const idade = await perguntar("Digite a idade do aluno: ");
  
  const curso = await perguntar("Digite o curso do aluno: ");

  const notaMat = await perguntar("Digite a nota de matemática do aluno: ");

  const notaFis = await perguntar("Digite a nota de física do aluno: ");

  const notaQui = await perguntar("Digite a nota de química do aluno: ");

  atribuirDados(nome, idade, curso, notaMat, notaFis, notaQui);

  const media = calcularMedia(aluno);

  console.log("Nome: " + aluno.nome);
  console.log("Idade: " + aluno.idade);
  console.log("Curso: " + aluno.curso);
  console.log("Matemática: " + aluno.notas.matematica);
  console.log("Física: " + aluno.notas.fisica);
  console.log("Química: " + aluno.notas.quimica);
  console.log(`A média final do aluno é: ${media.toFixed(2)}`);

  rl.close();
}

solicitarInformacao();