     
    function cadastrar() {
    const nomeDigitado = document.getElementById('nome').value;
    const idadeDigitada = document.getElementById('idade').value;
    const cpfDigitado = document.getElementById('cpf').value;
    const cidadeDigitada = document.getElementById('cidade').value;
    const emailDigitado = document.getElementById('email').value;
    const senhaDigitada = document.getElementById('senha').value;
    const confirmarSenhaDigitada = document.getElementById('confirmarSenha').value       
    
    if (senhaDigitada !== confirmarSenhaDigitada) {
        window.alert('As senhas não coincidem!')
        return; 
    }

    let usuariosString = localStorage.getItem('usuarios');
    let usuarios = [];

if (usuariosString) {
    usuarios = JSON.parse(usuariosString);
}

    const novoUsuario = {
        nome: nomeDigitado,
        idade: idadeDigitada,
        cpf: cpfDigitado,
        cidade: cidadeDigitada,
        email: emailDigitado,
        senha: senhaDigitada,
        foto: ""
}
          
    usuarios.push(novoUsuario)
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    
    document.getElementById('nome').value = '';
    document.getElementById('idade').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';


    window.location.href = "login.html";
}



function verificarSenhas() {
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    const mensagemDeErro = document.getElementById('mensagemDeErro')
    
    if (!senha && !confirmarSenha) {
        mensagemDeErro.style.display = 'none'
        return;
    }    
    if (senha !== confirmarSenha) {
        mensagemDeErro.style.display = 'block'
    }else { 
        mensagemDeErro.style.display = 'none'
    }
}

document.getElementById('senha').addEventListener('input', verificarSenhas)
document.getElementById('confirmarSenha').addEventListener('input', verificarSenhas)

   