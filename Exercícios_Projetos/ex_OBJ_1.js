let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2021,
  velocidadeAtual: 0,
 
  acelerar: function(incremento) {
    this.velocidadeAtual += incremento;
    console.log(`A velocidade atual é: ${this.velocidadeAtual} km/h`);
  },
 
  frear: function(decremento) {
    this.velocidadeAtual -= decremento;
    if (this.velocidadeAtual < 0) {
      this.velocidadeAtual = 0;
    }
    console.log(`A velocidade após frear é: ${this.velocidadeAtual} km/h`);
  },
 
  mostrarInfo: function() {
    console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`);
  }
};
 
carro.acelerar(50);
carro.frear(20);
carro.mostrarInfo();