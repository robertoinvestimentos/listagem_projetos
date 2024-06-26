function carregarTarefas() {
    // Carregar as tarefas do mês atual
    const tasks = import(`../dados/tasks_${selectedMonth}.js`);
    processarTarefas(tasks);
}

function processarTarefas(tasks) {
    const taskTableBody = document.getElementById('taskTableBody');
    taskTableBody.innerHTML = '';

    Object.entries(tasks).forEach(([dia, tarefas]) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${dia}</td>
            <td>${tarefas.join(', ')}</td>
        `;
        taskTableBody.appendChild(row);
    });
}

function adicionarTarefa() {
    // Implemente a lógica para adicionar uma nova tarefa
}

document.addEventListener('DOMContentLoaded', carregarTarefas);
