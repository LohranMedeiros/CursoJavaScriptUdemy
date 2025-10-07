const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual o seu nome? ", (nome) => {
    rl.question("Qual sua idade? ", (idade) => {
        rl.question("Qual a sua cidade? ", (cidade) => {
            console.log(`Informações inseridas: Nome: ${nome} / Idade: ${idade} / Cidade: ${cidade}`);

            rl.close();
        });
    });
});