function abrirImagem(imagem, descricao){
    let url = `imagem.html?imagem=${imagem}&descricao=${descricao}`;

    window.open(url, '_blank');
}