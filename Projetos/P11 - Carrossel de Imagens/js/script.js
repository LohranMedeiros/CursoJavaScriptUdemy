let indiceAtual = 0;
// Mantém o índice da imagem atualmente visível no carrossel.

function mostrarImagem(indice){

    const imagens = document.querySelectorAll(('.imagens-carrossel img'));
    // Seleciona todas as imagens dentro do elemento com classe 'imagens-carrosel'.

    if (indice >= imagens.length) indice = 0;

    if (indice < 0) indice = imagens.length - 1;
    // Se o índice for menor que 0, volta para a última imagem.

    imagens.forEach(img => {
        img.style.display = 'none';
        // Oculta cada imagem do carrossel.
    })

    imagens[indice].style.display = 'block';
    // Deixa apenas a imagem no índice visível.


    indiceAtual = indice;
    // Atualiza o índice atual
}

function mover(direcao){
    mostrarImagem(indiceAtual + direcao)
}

function selecionarImagem(indice){
    mostrarImagem(indice);
}

function abrirEmNovaAba(url){
    window.open(url, '_blank').focus();
    // 'focus' é usado para que a nova aba seja apresentada em primeiro plano.
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarImagem(indiceAtual);

    setInterval(() => mover(1), 5000);
});