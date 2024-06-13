document.addEventListener('DOMContentLoaded', function () {
    // Obter os elementos do DOM
    const creditDebitOption = document.getElementById('credit-debit');
    const pixOption = document.getElementById('pix');
    const boletoOption = document.getElementById('boleto');

    const creditDebitForm = document.getElementById('credit-debit-form');
    const pixCode = document.getElementById('pix-code');
    const boletoInfo = document.getElementById('boleto-info');
    const continueButton = document.getElementById('continue-button');

    // Função para mostrar/ocultar formulários e o botão com base na seleção
    function togglePaymentForms() {
        if (creditDebitOption.checked) {
            creditDebitForm.style.display = 'block';
            pixCode.style.display = 'none';
            boletoInfo.style.display = 'none';
            continueButton.style.display = 'block';
        } else if (pixOption.checked) {
            creditDebitForm.style.display = 'none';
            pixCode.style.display = 'block';
            pixCode.querySelector('img').style.display = 'block';
            boletoInfo.style.display = 'none';
            continueButton.style.display = 'none';
        } else if (boletoOption.checked) {
            creditDebitForm.style.display = 'none';
            pixCode.style.display = 'none';
            boletoInfo.style.display = 'block';
            continueButton.style.display = 'none';
        }
    }

    // Adicionar eventos aos botões de rádio
    creditDebitOption.addEventListener('change', togglePaymentForms);
    pixOption.addEventListener('change', togglePaymentForms);
    boletoOption.addEventListener('change', togglePaymentForms);

    // Inicializar o formulário com a opção selecionada (caso exista)
    togglePaymentForms();
});



