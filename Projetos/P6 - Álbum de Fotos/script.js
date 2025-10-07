document.getElementById('seletorArquivo').addEventListener('change', function(e){
    const arquivos = e.target.files;

    const galeria = document.getElementById('galeria');

    Array.from(arquivos).forEach(arquivo => {
        if(arquivo.type.startsWith('image/')){
            const leitor = new FileReader();

            leitor.onload = function (e){
                const descricao = prompt("Insira uma descrição para a imagem '" + arquivo.name + "':");

                const div = document.createElement('div');

                div.classList.add('imagem');

                const img = new Image();

                img.src = e.target.result;

                img.alt = arquivo.name;

                img.onclick = function(){ abrirModal(e.target.result, descricao);};
            
                div.appendChild(img);

                galeria.appendChild(div);
            };

            leitor.readAsDataURL(arquivo);
        }
    });
});

function abrirModal(src, descricao){
    const modal = document.getElementById('modal');

    modal.style.display = 'flex';

    modal.querySelector('img').src = src;

    modal.querySelector('.descricao').textContent = descricao || "Sem descrição";

    window.imagemAtual = src;
    /* Armazena a URL da imagem atualmente exibida no modal na 
            variável global `window.imagemAtual` -- Sem necessidade de usar let/var/const.
       Isso é útil para referência em outras funções, por exemplo, se houver 
            funcionalidades para excluir a imagem ou navegar entre várias 
            imagens carregadas no modal. */
}

function fecharModal() {
    const modal = document.getElementById('modal');

    modal.style.display = 'none';
}

function removerImagem(event){
    event.stopPropagation();
    /* Chama o método `stopPropagation` no objeto de evento `event`. Isso previne 
            que o evento de clique no botão se propague para outros elementos. 
       Por exemplo, sem essa chamada, clicar no botão também poderia disparar o 
            evento de clique do modal, que está configurado para fechar o modal 
            se clicado (configurado em outro lugar no código). */

    const imagens = document.querySelectorAll('#galeria .imagem img');

    imagens.forEach(img => {
        if(img.src === window.imagemAtual) {
            img.parentElement.remove();
            /* Acessa o elemento pai do <img> (que é o <div> com 
                classe 'imagem') e o remove do DOM.
            Isso efetivamente remove a imagem e seu contêiner do layout da 
                página, fazendo com que a imagem desapareça da galeria. */
        }
    });

    fecharModal();
}