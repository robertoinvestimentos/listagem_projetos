import { dados } from './data.js';

document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.getElementById('tableBody');

    Object.entries(dados).forEach(([dia, tempo]) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${dia}</td>
            <td>${tempo !== null ? tempo : '-'}</td>
        `;
        tableBody.appendChild(row);
    });
});
