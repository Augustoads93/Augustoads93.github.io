document.addEventListener('DOMContentLoaded', function() {
    let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado')) || {};
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    console.log('Usuários recuperados:', usuarioLogado);
    const fotoPreview = document.getElementById('fotoPreview');
    const salvarFotoBtn = document.getElementById('salvarFotoBtn');

    if (!usuarioLogado.nome) {
        window.location.href = "login.html";
        return;
    }

    if (usuarioLogado.foto) {
        fotoPreview.src = usuarioLogado.foto;
        fotoPreview.style.display = 'block';
        salvarFotoBtn.style.display = 'block';
    }

    console.log('Usuários recuperados:', usuarioLogado);

    document.getElementById('fotoPreview').src = usuarioLogado.foto;
    document.getElementById('nome').placeholder = usuarioLogado.nome;
    document.getElementById('idade').placeholder = usuarioLogado.idade;
    document.getElementById('cpf').placeholder = usuarioLogado.cpf;
    document.getElementById('cidade').placeholder = usuarioLogado.cidade;
    document.getElementById('email').placeholder = usuarioLogado.email;
    document.getElementById('senha').placeholder = usuarioLogado.senha;
        
    document.getElementById('alterarBtn').addEventListener('click', function() {
        const novoNome = document.getElementById('nome').value;
        const novaIdade = document.getElementById('idade').value;
        const novoCpf = document.getElementById('cpf').value;
        const novaCidade = document.getElementById('cidade').value;
        const novoEmail = document.getElementById('email').value;
        const novaSenha = document.getElementById('senha').value;

        if(novoNome && novaIdade && novoCpf && novaCidade && novoEmail && novaSenha) {
            usuarioLogado.nome = novoNome;
            usuarioLogado.idade = novaIdade;
            usuarioLogado.cpf = novoCpf;
            usuarioLogado.cidade = novaCidade;
            usuarioLogado.email = novoEmail;
            usuarioLogado.senha = novaSenha;

            const indexUsuario = usuarios.findIndex(user => user.nome === usuarioLogado.nome);
            if (indexUsuario !== -1) {
                usuarios[indexUsuario] = { ...usuarioLogado };
                localStorage.setItem('usuarios', JSON.stringify(usuarios));
            }
            
            localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
            window.alert('Alteração concluída!');     
        } else {
            window.alert('Por favor, preencha todos os campos antes de alterar o perfil.');
        }
    });

    document.getElementById('sair').addEventListener('click', function() {
        localStorage.removeItem('usuarioLogado');
        window.location.href = "login.html";
    });

    document.getElementById('salvarFotoBtn').addEventListener('click', function() {
        
        const fotoAtual = fotoPreview.src;

        
        usuarioLogado.foto = fotoAtual;

        console.log('Foto atual salva no objeto usuarioLogado:', usuarioLogado.foto);

        
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));

        
        window.alert('Foto salva com sucesso!');
    });

    document.getElementById('inputFoto').addEventListener('change', function() {
        const inputFoto = document.getElementById('inputFoto');
        const fotoSelecionada = inputFoto.files[0];
        
        if (fotoSelecionada) {
            fotoPreview.style.display = 'block';
            salvarFotoBtn.style.display = 'block';

            const reader = new FileReader();
            reader.onload = function(e) {
                fotoPreview.src = e.target.result;
                
                usuarioLogado.foto = e.target.result;
                console.log('Nova foto selecionada:', usuarioLogado.foto);

                localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
            };
            reader.readAsDataURL(fotoSelecionada);
        } else {
            fotoPreview.style.display = 'none';
            salvarFotoBtn.style.display = 'none';
        }
    });
});