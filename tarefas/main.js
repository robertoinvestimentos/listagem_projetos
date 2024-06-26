import { tarefas } from './tarefas/tarefas_24_06.js';

document.addEventListener('DOMContentLoaded', () => {
    const tasksContainer = document.getElementById('tasks');

    Object.keys(tarefas).forEach(date => {
        const taskList = tarefas[date];
        const dateElement = document.createElement('div');
        dateElement.className = 'task-date';
        dateElement.textContent = date;
        tasksContainer.appendChild(dateElement);

        if (taskList && taskList.length > 0) {
            taskList.forEach(task => {
                const taskItem = document.createElement('div');
                taskItem.className = 'task-item';
                taskItem.textContent = `- ${task}`;
                tasksContainer.appendChild(taskItem);
            });
        } else {
            const noTasks = document.createElement('div');
            noTasks.className = 'task-item';
            noTasks.textContent = '- Nenhuma tarefa';
            tasksContainer.appendChild(noTasks);
        }
    });
});
