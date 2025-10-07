
function adicionarNoVisor(valor) {
    // Pega o input com id="visor" e adiciona (concatena) o valor digitado ou clicado no botão
    document.getElementById('visor').value += valor;

}

function limparVisor() {
    // Limpa completamente o conteúdo do visor (zera a tela da calculadora)
    document.getElementById('visor').value = '';

}

function calcular() {
    // Captura a expressão digitada no visor (ex: "2+2")
    var expressao = document.getElementById('visor').value;
    
    try {
        // Cria uma função que retorna apenas a expressão matemática
        const resultado = new Function("return " + expressao)();

        // Verifica se o resultado é um número finito (não Infinity ou NaN)
        if (Number.isFinite(resultado)) {
            // Mostra o resultado no visor, formatado com 2 casas decimais
            document.getElementById('visor').value = resultado.toFixed(2);
        } else {
            // Se a expressão for inválida, exibe "Erro" no visor
            document.getElementById('visor').value = 'Erro';
        }
    }
    catch {
        document.getElementById('visor').value = 'Erro';
    }
        
    
}


document.addEventListener('keydown', function(event) {
    // Captura a tecla pressionada pelo usuário
    const tecla = event.key;

    // Se a tecla for um número, operador matemático ou tecla especial, executa ações
    if ((tecla >= '0' && tecla <= '9') || tecla === '.' || tecla === '+' || tecla === '-' || tecla === '*' || tecla === '/' || tecla === 'Enter' || tecla === 'Backspace' || tecla === 'Escape') {
        if (tecla === 'Enter') {
            // Pressionar Enter chama a função calcular()
            calcular();
                
        }
        else if (tecla === 'Escape') {
            // Pressionar Esc limpa o visor
            limparVisor();

        }
        else if (tecla === 'Backspace') {
            // Apaga o último caractere digitado
            const visor = document.getElementById('visor');
            visor.value = visor.value.slice(0, -1);
        }
        else {
            // Para números, ponto e operadores: adiciona o valor no visor
            adicionarNoVisor(tecla);
        }
    }
});