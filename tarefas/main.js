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

var idLink = 0;
console.log(idLink)
function createDayContainer(date, today) {
    
    idLink = idLink +1
    console.log(idLink)
    const dayContainer = document.createElement('div');
    dayContainer.className = 'day-container accordion-item';

    const dateElement = document.createElement('h2');
    dateElement.className = 'task-date btn btn-secondary accordion-header';
    dateElement.id = idLink;
    dateElement.innerHTML = `${date} ${iconAccordion(true)}`;
    if (date.startsWith(today)) {
        dateElement.classList.remove('btn-secondary');
        dateElement.classList.add('btn-success');
    }

    dateElement.addEventListener('click', () => {
        const collapseElement = dayContainer.querySelector('.accordion-collapse');
        collapseElement.classList.toggle('show');
        dateElement.innerHTML = `${date} ${iconAccordion(collapseElement.classList.contains('show'))}`;
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

    const projectTitle = document.createElement('h5');
    projectTitle.className = 'project-title accordion-header';
    projectTitle.innerHTML = `${project} ${iconAccordion(true)}`;

    projectTitle.addEventListener('click', () => {
        const projectCollapse = projectContainer.querySelector('.accordion-collapse');
        projectCollapse.classList.toggle('show');
        projectTitle.innerHTML = `${project} ${iconAccordion(projectCollapse.classList.contains('show'))} `;
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

function iconAccordion(isExpanded) {
    if (isExpanded) {
        return '<i class="bi bi-arrow-up-short"></i>'; //esconder
    } else {
        return '<i class="bi bi-arrow-down-short"></i>'; //expandir
    }
}

function expandAllCollapses() {
    const collapseElements = document.querySelectorAll('.accordion-collapse.collapse');
    collapseElements.forEach(element => {
        element.classList.add('show');
    });
}

function collapseAllCollapses() {
    const collapseElements = document.querySelectorAll('.accordion-collapse.collapse');
    collapseElements.forEach(element => {
        element.classList.remove('show');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('expandBtn').addEventListener('click', expandAllCollapses);
    document.getElementById('collapseBtn').addEventListener('click', collapseAllCollapses);
});