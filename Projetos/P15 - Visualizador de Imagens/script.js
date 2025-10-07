function mostrarImagem(caminho){
    const imagemGrande = document.getElementById('imagem-grande');

    const imagemZoom = document.getElementById('imagem-zoom');

    imagemGrande.src = caminho;

    imagemZoom.src = caminho;
}

document.getElementById('imagem-grande').addEventListener('mousemove', function(e) {
    
    //Busca o contâiner da imagem ampliada.
    const zoomContainer = document.getElementById('zoom-container');

    //Busca a imagem ampliada.
    const zoomImage = document.getElementById('imagem-zoom');

    // getBoudingClientRect() retorna o tamanho do elemento e sua posição à tela
    // Ele serve para medir um elemento na tela e dizer onde ele está.
    const rect = this.getBoundingClientRect();

    // Calcula a posição x do cursor do mouse em relação ao canto esquerdo da imagem
    // e.clientX é a posição horizontal do mouse
    // rect.left é a margem esquerda da imagem
    const x = e.clientX - rect.left;

    // Calcula a posição y do cursor do mouse em relação ao topo da imagem
    // e.clientY é a posição vertical do mouse
    // rect.top é a margem superior da imagem
    const y = e.clientY - rect.top;

    // Converte a posição x do cursor em porcentagem da largura total da imagem
    // Para definir a origem do zoom
    const xPercent = (x / rect.width) * 100;

    // Converte a posição y do cursor em porcentagem da altura total da imagem
    // Para definir a origem do zoom
    const yPercent = (y / rect.height) * 100;

    // Especifica a posição do cursor
    zoomImage.style.transformOrigin = `${xPercent}% ${yPercent}%`;

    zoomImage.style.transform = 'scale(2)';

    zoomContainer.style.display = 'block';
});

document.getElementById('imagem-grande').addEventListener('mouseleave', function() {
    const zoomImage = document.getElementById('imagem-zoom');

    zoomImage.style.transform = 'scale(1)';

    const zoomField = document.getElementById('zoom-container');
    
    zoomField.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function() {

    const listaImagens = document.getElementById('lista-imagens');

    // Define o número de imagens que serão carregadas
    const numImagens = 4;

    // O loop 'for' começa em 1 e vai até 'numImagens', 
    // permitindo iterar sobre o número especificado de imagens
    for (let i = 1; i <= numImagens; i++) {

        // Cria um novo elemento 'img' para cada iteração do loop
        const img = document.createElement('img');

        // Configura o atributo 'src' do elemento 'img' para
        // apontar para a localização esperada da imagem, usando a variável 'i' para
        // referenciar a imagem correspondente
        img.src = `imagem${i}.jpg`;

        // Define o atributo 'alt' para descrição alternativa
        img.alt = `Imagem ${i}`;

        // Adiciona a classe 'miniatura' ao elemento 'img' 
        // para dentificar os elementos em miniatura na página
        img.classList.add('miniatura');

        // Adicionado o evento 'mouseover' em cada imagem 
        // Quando o mouse passa sobre a imagem, função 'mostrarImagem' é chamada com o 'src' da imagem
        img.onmouseover = () => mostrarImagem(img.src);

        // Anexa o elemento 'img' criado ao contêiner 'lista-imagens'
        listaImagens.appendChild(img);

    }
});