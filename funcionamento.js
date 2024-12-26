let sessaoEscolhida = '';

function selecionarSessao(sessao) {
    sessaoEscolhida = sessao;
    document.getElementById('etapa-informacoes').style.display = 'block';
    alert(`Sessão escolhida: ${sessao}`);
}

function confirmarInformacoes() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    if (!nome || !email || !telefone) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const resumo = `
        <li>Sessão: ${sessaoEscolhida}</li>
        <li>Nome: ${nome}</li>
        <li>E-mail: ${email}</li>
        <li>Telefone: ${telefone}</li>
    `;
    document.getElementById('resumo-informacoes').innerHTML = resumo;
    document.getElementById('etapa-confirmacao').style.display = 'block';
}

function finalizarAgendamento() {
    alert('Agendamento confirmado! Obrigado.');
}
