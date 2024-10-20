document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    const tabelaCadastro = document.getElementById('tabelaCadastro');
    const novaLinha = tabelaCadastro.insertRow();

    const celulaNome = novaLinha.insertCell(0);
    const celulaEmail = novaLinha.insertCell(1);

    celulaNome.textContent = nome;
    celulaEmail.textContent = email;

    // Limpar os campos do formulário
    document.getElementById('cadastroForm').reset();
});
