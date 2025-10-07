class Livro {
  #copias;

  constructor(titulo, autor, copias){
    this.titulo = titulo;
    this.autor = autor;
    this.#copias = copias;
  }

  #verificarDisponibilidade(){
    return this.#copias > 0;
  }

  emprestar() {
    if(this.#verificarDisponibilidade()){
      this.#copias--;
      console.log(`Livro emprestado: ${this.titulo}. Cópias restantes: ${this.#copias}`);
    }
    else {
      console.log("Sem cópias disponíveis do livro '" + this.titulo + "'.");
    }
  }

  devolver() {
    this.#copias++;
    console.log(`Livro devolvido: ${this.titulo}. Número de cópias: ${this.#copias}`);
  }
}

const livro1 = new Livro("Escola de Vilões", "Gabriella", 2);
livro1.emprestar();
livro1.emprestar();
livro1.emprestar();
livro1.emprestar();
livro1.devolver();