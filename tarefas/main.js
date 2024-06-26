import { tarefas } from './tarefas/tarefas_24_06.js';

document.addEventListener('DOMContentLoaded', () => {
    const tasksContainer = document.getElementById('tasks');

    Object.keys(tarefas).forEach(date => {
        const projects = tarefas[date];

        if (projects && Object.keys(projects).length > 0) {
            // Cria um contêiner para o dia e suas tarefas
            const dayContainer = document.createElement('div');
            dayContainer.className = 'day-container';

            const dateElement = document.createElement('div');
            dateElement.className = 'task-date btn btn-secondary';
            dateElement.textContent = date;
            dayContainer.appendChild(dateElement);

            Object.keys(projects).forEach(project => {
                const projectContainer = document.createElement('div');
                projectContainer.className = 'project-container';

                const projectTitle = document.createElement('div');
                projectTitle.className = 'project-title';
                projectTitle.textContent = project;
                projectContainer.appendChild(projectTitle);

                const taskList = projects[project];
                taskList.forEach(taskObj => {
                    const taskItem = document.createElement('div');
                    taskItem.className = 'task-item';
                    const statusIcon = taskObj.status === 'y' ? 'bi-check2-square' : 'bi-square';
                    taskItem.innerHTML = `<i class="bi ${statusIcon}"></i> ${taskObj.tarefa}`;
                    projectContainer.appendChild(taskItem);
                });

                dayContainer.appendChild(projectContainer);
            });

            tasksContainer.appendChild(dayContainer);
        }
    });
});
