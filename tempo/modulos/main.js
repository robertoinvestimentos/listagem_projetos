function exibirMensagem(mensagem) {
    const messageElement = document.getElementById('message');
    messageElement.innerHTML = mensagem;
    messageElement.classList.remove('d-none');
}

function carregarDados() {
    const selectBox = document.getElementById('selectMonth');
    const selectedMonth = selectBox.value;
    import(`../dados/data_${selectedMonth}.js`).then(module => {
        const dados = module.dados;
        processarDados(dados, selectedMonth);
    }).catch(error => {
        console.error('Erro ao carregar dados:', error);
        exibirMensagem(`Não existem dados do mês de <strong>${selectedMonth}</strong> para mostrar`);
    });
}

function destacarDiaAtual(row, dia) {
    const dataAtual = new Date();
    const diaAtual = dataAtual.getDate();
    const mesAtual = dataAtual.getMonth() + 1; // Os meses em JavaScript são baseados em zero (janeiro é 0)
    
    // Converte o dia para número e obtém o dia e o mês da data sendo processada
    const [diaData, mesData] = dia.split('/');
    const diaNum = parseInt(diaData);
    const mesNum = parseInt(mesData);
    
    // Verifica se o dia e o mês da data sendo processada são iguais ao dia e mês atuais
    if (diaNum === diaAtual && mesNum === mesAtual) {
        row.classList.add('dia-atual'); // Adicione o nome da sua classe CSS aqui
    }
}

function processarDados(dados, mes) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; 
    const messageElement = document.getElementById('message');
    messageElement.innerHTML = ''; 
    messageElement.classList.add('d-none');
    
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
            <td>${dia} (${getDiaSemana(dia)})</td>
            <td>${tempo !== null ? converter(tempoMultiplicado) : '-'}</td>
            <td>${converter(tempoTotal)}</td>
            <td class="destaqueLinhas">${converter(media)}</td>
        `;
        destacarDiaAtual(row, dia); // Destacar dia atual
        tableBody.appendChild(row);
    });
}

document.getElementById('selectMonth').addEventListener('change', carregarDados);
document.addEventListener('DOMContentLoaded', carregarDados);

function getDiaSemana(dia) {
    const [day, month, year] = dia.split('/').map(Number);
    const data = new Date(year + 2000, month - 1, day); // Ajustando o ano para ficar completo (assumindo que estamos em 2024)
    const diasSemana = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
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
    const minutosRestantes = Math.round(minutos % 60);
    const minutosFormatados = minutosRestantes.toString().padStart(2, '0');
    return `${horas}h ${minutosFormatados}min`;
}

