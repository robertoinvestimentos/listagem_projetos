import { dados } from './data.js';

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
    const minutosFormatados = minutosRestantes.toFixed(0);
    return `${horas}h ${minutosFormatados}min`;
}

document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.getElementById('tableBody');
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
            <td>${converter(media)}</td>
        `;
        tableBody.appendChild(row);
    });
});
