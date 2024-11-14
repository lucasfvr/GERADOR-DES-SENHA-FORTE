// Função para gerar senha aleatória
function gerarSenha() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-";
    const lengthInput = document.getElementById("length").value;
    const senhaForteInput = document.getElementById("senhaForte");
    const mensagem = document.getElementById("mensagem");

    let senha = "";

    if (lengthInput < 8) {
        mensagem.textContent = "A senha deve ter pelo menos 8 caracteres.";
        return;
    }

    for (let i = 0; i < lengthInput; i++) {
        const indexAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(indexAleatorio);
    }

    senhaForteInput.value = senha;
    mensagem.textContent = "Senha gerada com sucesso!";
}

// Função para copiar senha para o clipboard
function copiar() {
    const senhaForteInput = document.getElementById("senhaForte");
    const mensagem = document.getElementById("mensagem");

    if (senhaForteInput.value) {
        navigator.clipboard.writeText(senhaForteInput.value);
        mensagem.textContent = "Senha copiada para a área de transferência!";
    } else {
        mensagem.textContent = "Nenhuma senha para copiar!";
    }
}
