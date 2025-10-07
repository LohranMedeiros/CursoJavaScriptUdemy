class Pessoa {
  constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
  }

  exibirDetalhes(){
    return "Nome: " + this.nome + ". Idade: " + this.idade;
  }
}

class Estudante extends Pessoa {
  constructor(nome, idade, matricula){
    super(nome, idade);
    this.matricula = matricula;
  }

  exibirDetalhes(){
    console.log(super.exibirDetalhes() +  ". Matrícula: " + this.matricula + ".");
  }
}

class Professor extends Pessoa {
  constructor(nome, idade, departamento){
    super(nome, idade);
    this.departamento = departamento;
  }

  exibir(){
    console.log(super.exibirDetalhes() + ". Departamento: " + this.departamento + ".");
  }
}

const estudante1 = new Estudante("Lohran", 22, "1077325");
estudante1.exibirDetalhes();

const professor1 = new Professor("Joana", 42, "CTU");
professor1.exibir();