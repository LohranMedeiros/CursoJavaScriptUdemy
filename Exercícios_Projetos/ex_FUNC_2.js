const pessoas = [
    {nome: "Alice", idade: 25},
    {nome: "Bob", idade: 30},
    {nome: "Carlos", idade: 22}
]

const calcularMedia = (pessoas) => {
    const somaIdades = pessoas.reduce((soma, pessoa) => soma + pessoa.idade, 0);
    return somaIdades / pessoas.length;
}

const media = calcularMedia(pessoas);

console.log(media);