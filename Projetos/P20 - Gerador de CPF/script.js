// Função para gerar numero aleatório entre min e max
function gerarNumeroAleatorio(min, max){
    
    /* Gera número flutuante (Math.random()) entre 0 e 1
    *  Multiplica o resultado pelo tamanho do intervalo (max - min + 1)
    *  Math.floor arredonda o resultado para baixo
    *  Adiciona o valor de min para garantir o começo
    */ 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Gera um CPF válido
function gerarCPF(){
    /* Gera os 9 primeiros dígitos do CPF
    *  Array.from cria um novo array com os 9
    */
    let digitosCPF = Array.from({ length: 9}, () => gerarNumeroAleatorio(0, 9));

    /* Calcula o primeiro dígito verificador 
    *  'reduce' processa cada elemento do array
    *   Acumula um resultado final com base na função
    */  
    let soma = digitosCPF.reduce((acc, curr, idx) => {
        
        /* 'acc' (acumulador) começa em 0
        *  'curr' é o valor atual do elemento no array
        *  'idx' é o índice
        *   Cada dígito é múltiplicado por um peso de 10 até 2
        */
        return acc + curr * (10 - idx);
    });

    /* Aplica a fórmula do módulo 11 para determinar o dígito
    *  'Soma % 11' calcula o resto da divisão da soma por 11
    *  Se o resultado for menor que 2, o primeiro é 0.
    *  Caso contrário, subtraí-se o resto de 11
    */
    let primeiroDigito = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    // Adiciona o primeiro digito verificador
    digitosCPF.push(primeiroDigito);

    /* Calcula o segundo dígito verificador
    *  Começa com o peso ajustado para 11
    */
    soma = digitosCPF.reduce((acc, curr, idx) => {
        return acc + curr * (11 - idx);
    });

    /* Aplica a fórmula do módulo 11 para determinar o dígito
    *  'Soma % 11' calcula o resto da divisão da soma por 11
    *  Se o resultado for menor que 2, o primeiro é 0.
    *  Caso contrário, subtraí-se o resto de 11
    */
    let segundoDigito = soma % 11 < 2 ? 0 : 11 - (soma % 11);


    // Adiciona o segundo dígito verificador
    digitosCPF.push(segundoDigito);

    return digitosCPF.join('');
}

// Formatar o CPF
function formatarCPF(cpf){

    /* Usa a função 'replace' para substituir partes de uma string baseada em expressão regular 
    * \d{3} captura três dígitos númericos, repetidos três vezes
    * \d{2} captura os dois últimos dígitos
    *
    * '$1.$2.$3-$4' determina o formato desejado
    * $1, $2, $3 e $4 referem-se a grupos capturados
    *  Cada grupo é separado por um ponto (.) ou um traço (-)
    */
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

// Função principal
function principal(){

    // Acessa o elemento do input
    const campoCPF = document.getElementById('cpf');

    // Acessa o botão por inicia a geração
    const botaoGerarCPF = document.getElementById('gerar-cpf');

    // Ação de evento ao reagir a cliques
    botaoGerarCPF.addEventListener('click', () => {
        // Gera o novo cpf
        const novoCPF = gerarCPF();

        console.log(novoCPF);

        // Formata o novo cpf
        const cpfFormatado = formatarCPF(novoCPF);

        // Atribui para a exibição no input
        campoCPF.value = cpfFormatado;
    });
}

// Chama a função principal
document.addEventListener('DOMContentLoaded', principal);