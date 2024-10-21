document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    
    const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    
    const celulaNome = novaLinha.insertCell(0);
    const celulaEmail = novaLinha.insertCell(1);
    
    
    celulaNome.textContent = nome;
    celulaEmail.textContent = email;

    
    document.getElementById('cadastroForm').reset();
});
