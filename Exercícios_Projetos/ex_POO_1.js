
class Aluno {
  constructor(nome, idade, curso) {
    this.nome = nome;
    this.idade = idade;
    this.curso = curso;
    this.notas = [];
  }

  adicionarNota(nota) {
    this.notas.push(nota);
  }

  calcularMedia() {
    // let somaNotas = 0;
    // let media = 0;

    // this.notas.forEach(n => {
    //   somaNotas += n;
    // });

    // media = somaNotas / this.notas.length;

    // return media;

    const totalNotas = this.notas.reduce((total, nota) => total + nota, 0);
    return totalNotas / this.notas.length;
  }

  aprovado() {
    const media = this.calcularMedia();

    if(media >= 7){
      console.log("Aluno(a) aprovado.");
    }
    else {
      console.log("Aluno(a) reprovado.");
    }
  }
}

const aluno1 = new Aluno("Lohran", 22, "Ciências da Computação");
aluno1.adicionarNota(8);
aluno1.adicionarNota(10);
aluno1.adicionarNota(8);
aluno1.adicionarNota(10);
aluno1.aprovado();