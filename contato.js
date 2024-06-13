const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Coletar os dados do formulário
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Enviar os dados para o servidor
    fetch('contato.php', {
        method: 'POST',
        
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Exibir mensagem de retorno do servidor
        contactForm.reset(); // Limpar o formulário após o envio
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar mensagem. Por favor, tente novamente.');
    });
});