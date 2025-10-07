document.addEventListener('DOMContentLoaded', () => {

    const circulos = document.querySelectorAll('.circulo');

    const cor = ['red', 'yellow', '#04b804'];

    let intervaloSemaforo, indiceAtual = 0;

    circulos[0].style.backgroundColor = cor[0];

    circulos.forEach((circulo, index) => {
        circulo.addEventListener('click', () => {
            clearInterval(intervaloSemaforo);

            indiceAtual = index;

            atualizarSemaforo();

            iniciarSemaforo();
        });
    })

    function atualizarSemaforo(){
        circulos.forEach(circulo => {circulo.style.backgroundColor = 'white'});

        circulos[indiceAtual].style.backgroundColor = cor[indiceAtual];
    }

    function iniciarSemaforo(){
        intervaloSemaforo = setInterval(() => {
            indiceAtual = (indiceAtual < circulos.length - 1) ? indiceAtual + 1 : 0;
            atualizarSemaforo();
        }, 5000);
    }

    iniciarSemaforo();

});