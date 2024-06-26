import { tarefas } from './tarefas/tarefas_24_06.js';

document.addEventListener('DOMContentLoaded', () => {
    const tasksContainer = document.getElementById('tasks');

    Object.keys(tarefas).forEach(date => {
        const taskList = tarefas[date];

        // Cria um contêiner para o dia e suas tarefas
        const dayContainer = document.createElement('div');
        dayContainer.className = 'day-container';

        const dateElement = document.createElement('div');
        dateElement.className = 'task-date';
        dateElement.textContent = date;
        dayContainer.appendChild(dateElement);

        if (taskList && taskList.length > 0) {
            taskList.forEach(task => {
                const taskItem = document.createElement('div');
                taskItem.className = 'task-item';
                taskItem.textContent = `- ${task}`;
                dayContainer.appendChild(taskItem);
            });
        } else {
            const noTasks = document.createElement('div');
            noTasks.className = 'task-item';
            noTasks.textContent = '- Nenhuma tarefa';
            dayContainer.appendChild(noTasks);
        }

        tasksContainer.appendChild(dayContainer);
    });
});
