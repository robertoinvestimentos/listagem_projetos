// Função para exibir uma mensagem
function exibirMensagem(mensagem) {
    const messageElement = document.getElementById('message');
    messageElement.innerHTML = mensagem;
    messageElement.classList.remove('d-none');
}

// Função para carregar dados com base no mês selecionado
function carregarDados() {
    const selectBox = document.getElementById('selectMonth');
    const selectedMonth = selectBox.value; // Valor selecionado pelo usuário

    // Lógica para carregar os dados do arquivo correspondente
    import(`./data_${selectedMonth}.js`).then(module => {
        const dados = module.dados; // Dados carregados do arquivo
        // Lógica para processar e exibir os dados conforme necessário
        processarDados(dados, selectedMonth);
    }).catch(error => {
        console.error('Erro ao carregar dados:', error);
        exibirMensagem(`Não existem dados do mês de <strong>${selectedMonth}</strong> para mostrar`);
    });
}

// Função para processar e exibir os dados
function processarDados(dados, mes) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; // Limpar a tabela antes de adicionar novos dados
    const messageElement = document.getElementById('message');
    messageElement.innerHTML = ''; // Limpar mensagem de erro anterior
    messageElement.classList.add('d-none'); // Esconder mensagem de erro anterior

    if (Object.keys(dados).length === 0) {
        exibirMensagem(`Não existem dados do mês de <strong>${mes}</strong> para mostrar`);
        return;
    }

    let tempoTotal = 0;
    let diasContados = 0;

    Object.entries(dados).forEach(([dia, tempo]) => {
        const tempoMultiplicado = multiplicar(tempo);
        tempoTotal += tempoMultiplicado;
        diasContados++;
        const media = tempoTotal / diasContados;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${dia < 10 ? '0' + dia : dia}/06/24 (${getDiaSemana(dia)})</td>
            <td>${tempo !== null ? converter(tempoMultiplicado) : '-'}</td>
            <td>${converter(tempoTotal)}</td>
            <td class="destaqueLinhas">${converter(media)}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Evento para acionar a função ao alterar a seleção do mês
document.getElementById('selectMonth').addEventListener('change', carregarDados);

// Chamando a função ao carregar a página para exibir o mês inicial
document.addEventListener('DOMContentLoaded', carregarDados);

function getDiaSemana(dia){
    const diasSemana = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
    const data = new Date(`2024-06-${dia}`);
    return diasSemana[data.getDay()];
}

function multiplicar(minutos) {
      if (minutos !== null && minutos > 0) {
         return minutos * 3;
    } else {
        return 0;
    }
}

function converter(minutos) {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
    const minutosFormatados = Math.round(minutosRestantes);
    return `${horas}h ${minutosFormatados}min`;
}
