import { tarefas } from './tarefas/tarefas_24_06.js';

document.addEventListener('DOMContentLoaded', () => {
    const tasksContainer = document.getElementById('tasks');
    const today = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' });

    Object.keys(tarefas).forEach(date => {
        const projects = tarefas[date];

        if (projects && Object.keys(projects).length > 0) {
            // Cria um contêiner para o dia e suas tarefas
            const dayContainer = document.createElement('div');
            dayContainer.className = 'day-container accordion-item';

            const dateElement = document.createElement('h2');
            dateElement.className = 'task-date btn btn-secondary accordion-header';
            dateElement.textContent = date;
            if (date.startsWith(today)) {
                dateElement.classList.remove('btn-secondary');
                dateElement.classList.add('btn-success');
            }

            const collapseElement = document.createElement('div');
            collapseElement.className = 'accordion-collapse collapse show'; // Adiciona 'show' para exibir por padrão
            dayContainer.appendChild(collapseElement);

            const projectsContainer = document.createElement('div');
            projectsContainer.className = 'accordion-body';
            collapseElement.appendChild(projectsContainer);

            Object.keys(projects).forEach(project => {
                const projectContainer = document.createElement('div');
                projectContainer.className = 'project-container accordion-item';

                const projectTitle = document.createElement('h3');
                projectTitle.className = 'project-title accordion-header';
                projectTitle.textContent = project;
                projectContainer.appendChild(projectTitle);

                const projectCollapse = document.createElement('div');
                projectCollapse.className = 'accordion-collapse collapse show'; // Adiciona 'show' para exibir por padrão
                projectContainer.appendChild(projectCollapse);

                const taskListContainer = document.createElement('div');
                taskListContainer.className = 'accordion-body';
                projectCollapse.appendChild(taskListContainer);

                const taskList = projects[project];
                taskList.forEach(taskObj => {
                    const taskItem = document.createElement('div');
                    taskItem.className = 'task-item';
                    const statusIcon = taskObj.status === 'y' ? 'bi-check2-square' : 'bi-square';
                    taskItem.innerHTML = `<i class="bi ${statusIcon}"></i> ${taskObj.tarefa}`;
                    taskListContainer.appendChild(taskItem);
                });

                projectsContainer.appendChild(projectContainer);
            });

            tasksContainer.appendChild(dayContainer);
        }
    });
});
