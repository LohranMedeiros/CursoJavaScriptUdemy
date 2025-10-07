document.getElementById('btn-mcor').addEventListener('click', function(){
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    /*
       `Math.random()` gera um número aleatório entre 0 (inclusive) e 1 (exclusivo).
       `Math.random() * 16777215` multiplica esse número aleatório pelo número 16777215,
       que é o máximo valor para uma cor em hexadecimal (cor branca - ffffff em hex).
       
       `Math.floor()` é usado para arredondar o número resultante para o inteiro mais próximo
       menor ou igual a ele, garantindo que não tenhamos casas decimais.
       
       `.toString(16)` converte o número inteiro para uma string em base hexadecimal (base 16).
       Isso é necessário porque as cores em CSS que usam valores hexadecimais precisam ser strings.
    */

    document.body.style.backgroundColor = randomColor;   
});