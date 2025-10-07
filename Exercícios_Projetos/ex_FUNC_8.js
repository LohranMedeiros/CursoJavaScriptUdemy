// Método de Função

function Relogio (horas, minutos, segundos) {
   this.horas = horas;
   this.minutos = minutos;
   this.segundos = segundos;

   this.ajustarTempo = function(horas, minutos, segundos){
      this.horas = horas;
      this.minutos = minutos;
      this.segundos = segundos;
   }

   this.addMinutos = function(minutos){
      this.minutos += minutos;

      while (this.minutos >= 60){
         this.minutos -= 60;
         this.horas += 1;
      }
   }

   this.addSegundos = function(segundos){
      this.segundos += segundos;

      while (this.segundos >= 60){
         this.segundos -= 60;
         this.minutos += 1;
      }
   }

   this.exibirTempo = function(){
      console.log(`A hora atual é: ${this.horas.toString().padStart(2, 0)}:${this.minutos.toString().padStart(2, 0)}:${this.segundos.toString().padStart(2, 0)}`);
   }
}

const relogioPulso = new Relogio(7, 29, 22);
relogioPulso.exibirTempo();

relogioPulso.addSegundos(60);
relogioPulso.exibirTempo();

relogioPulso.addMinutos(85);
relogioPulso.exibirTempo();