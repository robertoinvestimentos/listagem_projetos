import { tarefas } from './tarefas/tarefas_24_06.js';

document.addEventListener('DOMContentLoaded', () => {
    const tasksContainer = document.getElementById('tasks');
    const today = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' });

    Object.keys(tarefas).forEach(date => {
        const projects = tarefas[date];
        if (projects && Object.keys(projects).length > 0) {
            const dayContainer = createDayContainer(date, today);
            const collapseElement = createCollapseElement();
            dayContainer.appendChild(collapseElement);

            const projectsContainer = createProjectsContainer();
            collapseElement.appendChild(projectsContainer);

            Object.keys(projects).forEach(project => {
                const projectContainer = createProjectContainer(project);
                const projectCollapse = createCollapseElement();
                projectCollapse.classList.add('show'); // Exibir por padrão
                projectContainer.appendChild(projectCollapse);

                const taskListContainer = createTaskListContainer();
                projectCollapse.appendChild(taskListContainer);

                const taskList = projects[project];
                taskList.forEach(taskObj => {
                    const taskItem = createTaskItem(taskObj);
                    taskListContainer.appendChild(taskItem);
                });

                projectsContainer.appendChild(projectContainer);
            });

            tasksContainer.appendChild(dayContainer);
        }
    });
});

function createDayContainer(date, today) {
    const dayContainer = document.createElement('div');
    dayContainer.className = 'day-container accordion-item';

    const dateElement = document.createElement('h2');
    dateElement.className = 'task-date btn btn-secondary accordion-header';
    dateElement.textContent = date;

    if (date.startsWith(today)) {
        dateElement.classList.remove('btn-secondary');
        dateElement.classList.add('btn-success');
    }

    dateElement.addEventListener('click', () => {
        const collapseElement = dayContainer.querySelector('.accordion-collapse');
        collapseElement.classList.toggle('show');
    });

    dayContainer.appendChild(dateElement);
    return dayContainer;
}

function createCollapseElement() {
    const collapseElement = document.createElement('div');
    collapseElement.className = 'accordion-collapse collapse show'; // Exibir por padrão
    return collapseElement;
}

function createProjectsContainer() {
    const projectsContainer = document.createElement('div');
    projectsContainer.className = 'accordion-body';
    return projectsContainer;
}

function createProjectContainer(project) {
    const projectContainer = document.createElement('div');
    projectContainer.className = 'project-container accordion-item';

    const projectTitle = document.createElement('h3');
    projectTitle.className = 'project-title accordion-header';
    projectTitle.textContent = project;

    projectTitle.addEventListener('click', () => {
        const projectCollapse = projectContainer.querySelector('.accordion-collapse');
        projectCollapse.classList.toggle('show');
    });

    projectContainer.appendChild(projectTitle);
    return projectContainer;
}

function createTaskListContainer() {
    const taskListContainer = document.createElement('div');
    taskListContainer.className = 'accordion-body';
    return taskListContainer;
}

function createTaskItem(taskObj) {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    const statusIcon = taskObj.status === 'y' ? 'bi-check2-square' : 'bi-square';
    taskItem.innerHTML = `<i class="bi ${statusIcon}"></i> ${taskObj.tarefa}`;
    return taskItem;
}
