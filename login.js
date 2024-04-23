function login() {
    
    const nomeDigitado = document.querySelector('#nome').value;
    const senhaDigitada = document.querySelector('#senha').value;

    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]')

    let usuarioLogado = usuarios.find(user => user.nome === nomeDigitado && user.senha === senhaDigitada)
    
    if (usuarioLogado) {
       
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));

        window.location.href = "meu_perfil.html";
    } else {
        window.alert('Nome ou senha incorretos!');
    } 
    
    document.querySelector('#nome').value = '';
    document.querySelector('#senha').value = '';
}

function cadastre_se() {
    window.location.href = "cadastro.html";
}