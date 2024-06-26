import { tarefas } from './tarefas/tarefas_24_06.js';

document.addEventListener('DOMContentLoaded', () => {
    const tasksContainer = document.getElementById('tasks');

    Object.keys(tarefas).forEach(date => {
        const taskList = tarefas[date];

        if (taskList && taskList.length > 0) {
            // Cria um contêiner para o dia e suas tarefas
            const dayContainer = document.createElement('div');
            dayContainer.className = 'day-container';

            const dateElement = document.createElement('div');
            dateElement.className = 'task-date btn btn-secondary';
            dateElement.textContent = date;
            dayContainer.appendChild(dateElement);

            taskList.forEach(task => {
                const taskItem = document.createElement('div');
                taskItem.className = 'task-item';
                taskItem.innerHTML = `<i class="bi bi-check2-square"></i> ${task}`;
                dayContainer.appendChild(taskItem);
            });

            tasksContainer.appendChild(dayContainer);
        }
    });
});
