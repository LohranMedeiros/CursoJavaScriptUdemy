document.addEventListener('DOMContentLoaded', () => {
    
    // Definição de uma constante que é um array de objetos
    const perguntas = [

        // Cada objeto tem 'pergunta, 'opcoes' e 'resposta'.
        {pergunta: "Qual é o maior animal terrestre?", opcoes: ["Elefante africando", "Rinoceronte branco", "Girafa", "Urso Polar"], resposta: "Elefante africano"},
        { pergunta: "Qual animal é conhecido como o 'Rei da Selva'?", opcoes: ["Tigre", "Leão", "Elefante", "Gorila"], resposta: "Leão" },
        { pergunta: "Qual destes animais é um mamífero aquático?", opcoes: ["Tubarão", "Baleia-azul", "Polvo", "Camarão"], resposta: "Baleia-azul" },
        { pergunta: "Quantas vidas diz-se que um gato tem?", opcoes: ["1", "5", "7", "9"], resposta: "7" },
        { pergunta: "Qual é o animal mais rápido do mundo?", opcoes: ["Falcão peregrino", "Leopardo", "Guepardo", "Leão"], resposta: "Falcão peregrino" },
        { pergunta: "Qual desses animais é um réptil?", opcoes: ["Sapo", "Salamandra", "Cobra", "Baleia"], resposta: "Cobra" },
        { pergunta: "Qual é o maior animal do mundo?", opcoes: ["Elefante africano", "Baleia-azul", "Girafa", "Tubarão-branco"], resposta: "Baleia-azul" },
        { pergunta: "O que é uma panda gigante?", opcoes: ["Carnívoro", "Herbívoro", "Onívoro", "Insetívoro"], resposta: "Herbívoro" },
        { pergunta: "Qual destes animais é conhecido por ter uma excelente memória?", opcoes: ["Elefante", "Cachorro", "Gato", "Peixe"], resposta: "Elefante" },
        { pergunta: "Que animal é o símbolo nacional da Austrália?", opcoes: ["Canguru", "Koala", "Emu", "Dingo"], resposta: "Canguru" }
    ];

    /* 'perguntaAtual' para rastrear o índice da pergunta atual no array de perguntas.
    *  'pontuacao' para armazenar a pontuação de respostas corretas
    *  'respostasUsuario para armarzenar as respostas dadas ao longo do quiz
    */

    let perguntaAtual = 0, pontuacao = 0, respostasUsuario = [];

    const elementoPergunta = document.getElementById('pergunta');

    const elementoOpcoes = document.getElementById('opcoes');

    const botaoSubmeter = document.getElementById('submeter');

    const elementoResultado = document.getElementById('resultado');

    function mostrarPergunta(pergunta){
        // Define o texto do 'elementoPergunta' (div) para que seja o mesmo da pergunta
        elementoPergunta.textContent = pergunta.pergunta;

        // Limpa o 'elementosOpcoes'
        elementoOpcoes.innerHTML = '';
        
        pergunta.opcoes.forEach(opcao => {
            const label = document.createElement('label');

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'opcao';
            radio.value = opcao;

            // Adiciona a constante 'radio' e os nós ao elemento 'label'
            label.appendChild(radio);
            label.appendChild(document.createTextNode(opcao));

            // Adiciona o 'label' ao 'elementosOpcoes'
            elementoOpcoes.appendChild(label);
        });
    }

    // Verifica a resposta do usuário
    function verificarResposta() {
        const opcaoSelecionada = document.querySelector('input[name="opcao"]:checked');

        // Verifica se alguma opção foi escolhida
        if(!opcaoSelecionada){
            alert('Por favor, selecione uma opção.');
            return;
        }

        // Adiciona o valor da opção selecionada no array de 'respostasUsuario'
        respostasUsuario.push(opcaoSelecionada.value);

        // Verifica se o valor da opção selecionada é igual à resposta correta
        if(opcaoSelecionada.value === perguntas[perguntaAtual].resposta){
            // Se sim, incrementa a pontuação
            pontuacao++;
        }

        // Incrementa a variável 'perguntaAtual' para a próxima pergunta
        perguntaAtual++;

        // Verifica se há mais perguntas
        if(perguntaAtual < perguntas.length){
            // Chama a próxima pergunta
            mostrarPergunta(perguntas[perguntaAtual]);
        }
        else {
            // Mostra o resultado
            mostrarResultado();
        }
    }

    function mostrarResultado(){
        elementoPergunta.style.display = 'none';

        elementoOpcoes.style.display = 'none';

        botaoSubmeter.style.display = 'none';

        const porcentagemPontuacao = (pontuacao / perguntas.length) * 100;

        let resultadoHTML = porcentagemPontuacao >= 70 ?
            `Parabéns! Você foi aprovado com ${pontuacao} de ${perguntas.length} acertos.`
            : `Você foi reprovado. Você acertou ${pontuacao} de ${perguntas.length}.`;
    
        resultadoHTML += '<br><br><h2>Respostas:</h2>';
        
        perguntas.forEach((pergunta, index) => {
            resultadoHTML += `<p><strong>Pergunta ${index + 1}:</strong> ${pergunta.pergunta}<br>`;
            resultadoHTML += `<strong>Resposta Correta:</strong> ${pergunta.resposta}<br>`
        
            resultadoHTML += `<strong>Sua Resposta:</strong> ${respostasUsuario[index] ? respostasUsuario[index] : 'Não respondida'}<br></p>`
        });

        elementoResultado.innerHTML = resultadoHTML;
    }


    mostrarPergunta(perguntas[perguntaAtual]);

    botaoSubmeter.addEventListener('click', verificarResposta);
});