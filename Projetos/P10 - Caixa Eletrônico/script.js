function salvarUsuarios(usuarios){
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function obterUsuarios(){
    return JSON.parse(localStorage.getItem('usuarios')) || [];
}

function limparCampos(){
    document.getElementById('usuario').value = '';
    document.getElementById('senha').value = '';
}

function registrar() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    const novoUsuario = {id: Date.now(), usuario, senha, saldo: 0, historico: []};

    const usuarios = obterUsuarios();

    usuarios.push(novoUsuario);

    salvarUsuarios(usuarios);

    limparCampos();
}

function login(){
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    const usuarios = obterUsuarios();

    const user = usuarios.find(u => u.usuario == usuario && u.senha == senha);

    if(user){
        alert("Logado com sucesso!");
        caixaEletronico(user);
    }
    else {
        alert("Dados inconsistentes. Tente novamente");
    }
}

function caixaEletronico(usuario) {
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.atm-container').style.display = 'block';

    const user = document.getElementById('nome');
    user.textContent = `${usuario.usuario}`;

    const conta = document.getElementById('conta');
    conta.textContent = `${usuario.id}`;

    const saldo = document.getElementById('saldo');
    saldo.textContent = `${usuario.saldo}`;
}

function exibirDepositar(){
    ocultarExibicao();

    let container = document.querySelector('.deposito-container'); 
    container.style.display = 'block';
}

function exibirSacar(){
    ocultarExibicao();
    
    let container = document.querySelector('.saque-container'); 
    container.style.display = 'block';
}

function exibirHistorico(){
    ocultarExibicao();
    
    let container = document.querySelector('.historico-container'); 
    container.style.display = 'block';    

    historico();
}

function ocultarExibicao(){
    let historico = document.querySelector('.historico-container');
    let estiloHistorico = window.getComputedStyle(historico);    
    if(estiloHistorico.display == 'block'){
        historico.style.display = 'none';
    }

    let deposito = document.querySelector('.deposito-container');
    let estiloDeposito = window.getComputedStyle(deposito);    
    if(estiloDeposito.display == 'block'){
        deposito.style.display = 'none';
    }
    
    let saque = document.querySelector('.saque-container');
    let estiloSaque = window.getComputedStyle(saque);    
    if(estiloSaque.display == 'block'){
        saque.style.display = 'none';
    }
}


function depositar(){
    const usuarios = obterUsuarios();
    const usuario = document.getElementById('usuario').value;
    const user = usuarios.find(u => u.usuario == usuario);

    let deposito = parseFloat(document.getElementById('deposito').value);
    if(isNaN(deposito) || deposito < 0){
        alert("Digite um valor válido.");
        return;
    }

    user.saldo += deposito;

    user.historico.push({
        tipo: "Depósito",
        valor: deposito
    });    

    salvarUsuarios(usuarios);

    alert("Depósito realizado com sucesso.");

    document.getElementById('saldo').textContent = user.saldo;

    document.getElementById('deposito').value = '';
}

function sacar(){
    const usuarios = obterUsuarios();
    const usuario = document.getElementById('usuario').value;
    const user = usuarios.find(u => u.usuario == usuario);

    let saque = parseFloat(document.getElementById('saque').value);
    if(isNaN(saque) || saque > user.saldo || saque < 0){
        alert("Digite um valor válido.");
        return;
    }

    user.saldo -= saque;

    user.historico.push({
        tipo: "Saque",
        valor: saque
    });    

    salvarUsuarios(usuarios);

    alert("Saque realizado com sucesso.");

    document.getElementById('saldo').textContent = user.saldo;

    document.getElementById('saque').value = "";
}

function historico(){
    const usuarios = obterUsuarios();
    const usuario = document.getElementById('usuario').value;
    const user = usuarios.find(u => u.usuario == usuario);

    const textarea = document.getElementById('historico-text');
    textarea.value = user.historico
    .map(t => `${t.tipo}: R$ ${t.valor}`)
    .join("\n");
}

function logout() {
    document.querySelector('.atm-container').style.display = 'none';
    document.querySelector('.login-container').style.display = 'block';
    document.getElementById('usuario').value = '';
    document.getElementById('senha').value = '';
}

function cancelar(){
    ocultarExibicao();
}