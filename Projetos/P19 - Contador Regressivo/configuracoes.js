// Espera o carregamento completo do conteúdo da página antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
    
    // Define a data e hora do evento e converte para milissegundos
    const dataEvento = new Date('Oct 08, 2030, 00:00:00').getTime();

    // Cria um intervalo que será executado a cada 1 segundo (1000 ms)
    const intervalo = setInterval(() => {
        
        // Pega a data e hora atuais em milissegundos
        const agora = Date.now();

        // Calcula a diferença entre o evento e o tempo atual
        const distanciaSegundos = Math.floor((dataEvento - agora) / 1000);

        // Extrai o tempo extra usando os segundos específicos do período
        const dias = Math.floor(distanciaSegundos / 86400); // 86400 segundos em 1 dia
        const horas = Math.floor((distanciaSegundos % 86400) / 3600); // 3600 segundos em 1 hora
        const minutos = Math.floor((distanciaSegundos % 3600) / 60); // 60 segundos em 1 minuto
        const segundos = distanciaSegundos % 60; // resto em segundos


        // Atualiza o conteúdo dos elementos HTML com os valores calculados
        document.querySelector('#dias .number').textContent = dias < 10 ? '0' + dias : dias;
        document.querySelector('#horas .number').textContent = horas < 10 ? '0' + horas : horas;
        document.querySelector('#minutos .number').textContent = minutos < 10 ? '0' + minutos : minutos;
        document.querySelector('#segundos .number').textContent = segundos < 10 ? '0' + segundos : segundos;
    
        // Quando o tempo termina (distância < 0), o intervalo é parado e o contador substituído por uma mensagem
        if (distanciaSegundos < 0) {
            clearInterval(intervalo);
            document.querySelector('.contador').innerHTML = "<div>O evento começou!</div>"
        }
    
    }, 1000); // Intervalo de 1 segundo entre atualizações
});
