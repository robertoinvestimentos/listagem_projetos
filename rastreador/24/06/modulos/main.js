import { dados } from './data.js';

document.addEventListener('DOMContentLoaded', function () {
    const titleProject = document.querySelector('.titleProject');
    const tableBody = document.getElementById('tableBody');

    // Verifica se os elementos foram encontrados no DOM
    if (titleProject && tableBody) {
        // Atualiza o título do projeto
        titleProject.textContent = 'Rastreamento de Tempo';

        // Insere os dados na tabela
        Object.entries(dados).forEach(([dia, tempo]) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${dia}</td>
                <td>${tempo !== null ? tempo : '-'}</td>
            `;
            tableBody.appendChild(row);
        });
    } else {
        console.error('Elementos não encontrados no DOM.');
    }
});
