import { dados } from './data.js';

function getDiaSemana(dia){
    const diasSemana = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
    const data = new Date(`2024-06-${dia}`);
    return diasSemana[data.getDay()];
}

function multiplicar(tempoMinutos) {
    // Verifica se o tempo é válido (não nulo e maior que zero)
    if (tempoMinutos !== null && tempoMinutos > 0) {
        // Multiplica o tempo por 3
        return tempoMinutos * 3;
    } else {
        // Retorna 0 se o tempo for inválido
        return 0;
    }
}

function converter(minutos) {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
    return `${horas}h ${minutosRestantes}min`;
}

document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.getElementById('tableBody');

    Object.entries(dados).forEach(([dia, tempo]) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${dia < 10 ? '0' + dia : dia}/06/24 (${getDiaSemana(dia)})</td>
            <td>${tempo !== null ? converter(tempo) : '-'}</td>

        `;
        tableBody.appendChild(row);
    });
});
