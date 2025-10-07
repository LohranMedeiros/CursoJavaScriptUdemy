const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Olá, bem-vindo à Lanches Rápidos. \n No menu, temos a opção: \n 1. Pizza; \n 2.Hambúrguer; \n 3. Salada.");

rl.question("Digite sua escolha (1 a 3): ", (op) => {
    let num = parseInt(op);
    switch (num) {
        case 1:
            console.log("Seu pedido é de Pizza. Já estará em sua mesa.");
            break;
        case 2:
            console.log("Seu pedido é de Hambúrguer. Já estará em sua mesa.");
            break;
        case 3:
            console.log("Seu pedido é de Salada. Já estará em sua mesa.");
            break;
        default:
            console.log("Pedido inválido.");
            break;
    }

    rl.close()
});