document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const btnAnterior = document.querySelector('.anterior');
    const btnProximo = document.querySelector('.proximo');

    let anguloAtual = 0;

    // Calcula o ângulo de rotação necessário para cada slide para distribuí-los uniformemente
    // em um círculo completo (360 graus)
    const anguloPorSlide = 360 / slides.length;

    function atualizarSlides(){
        slides.forEach((slide, index) => {
            // Calcula o ângulo para cada slide adicionando o ângulo atual do carrossel (anguloAtual) ao
            // ângulo calculado com base na posição do índice.
            const angulo = anguloAtual + index * anguloPorSlide;

            // Converte o ângulo em graus para radianos para uso nas funções trigonométricas. 
            const radianos = angulo * Math.PI / 180;

            // Calcula a elevação (ou profundidade) do slide baseando-se no cosseno do ângulo em radianos.
            const elevacao = Math.cos(radianos) * 600;

            // Define a transformação CSS do slide para posicioná-lo dentro do carrossel.
            // 'rotateY' gira o slide ao redor do eixo Y pelo
                    // ângulo calculado, orientando-o de acordo
                    // com sua posição no carrossel.
            // 'translateZ' move o slide ao longo do eixo Z para
                    // dentro ou para fora do plano da tela, aqui
                    // fixado em 700px para todos os slides para dar profundidade.
            // 'translateY' move o slide ao longo do eixo Y para
                    // cima ou para baixo; usa a elevação
                    // calculada apenas se ela for negativa,
                    // o que ocorre quando o slide está atrás do ponto
                    // central na visualização 3D, fazendo com
                    // que ele apareça mais baixo no visor.
            // Math.abs(elevacao) é usado para converter quaisquer
                    // valores negativos de elevação para positivos,
                    // garantindo que o deslocamento seja sempre para cima.
            slide.style.transform = `rotateY(${angulo}deg) translateZ(700px) translateY(${elevacao < 0 ? Math.abs(elevacao) : 0}px)`;
        });
    }

    btnAnterior.addEventListener('click', () => {

        // Decrementa a variável 'anguloAtual' pelo 'anguloPorSlide'. 
        // Isso ajusta o ângulo do carrossel, rotacionando-o no sentido anti-horário.
        anguloAtual -= anguloPorSlide;

        atualizarSlides();
        
    });

    // Adiciona um ouvinte de evento de clique ao botão 'btnProximo'.
    btnProximo.addEventListener('click', () => {

        // Incrementa a variável 'anguloAtual' pelo 'anguloPorSlide'.
        // Isso ajusta o ângulo do carrossel, rotacionando-o no sentido horário.
        // Isso faz com que o carrossel se mova para a posição do próximo slide.
        anguloAtual += anguloPorSlide;

        atualizarSlides();
        
    });
    
    setInterval(() => {

        // Incrementa a variável 'anguloAtual' pelo valor de 'anguloPorSlide'. 
        // Isso altera o ângulo de rotação do carrossel, fazendo com que ele gire e mostre o próximo slide.
        // Essa operação é feita a cada 5 segundos devido ao setInterval.
        anguloAtual += anguloPorSlide;
    
        atualizarSlides();
    }, 5000); 

    atualizarSlides();

});