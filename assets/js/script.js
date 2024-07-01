
import { projects } from "./projetos.js";

function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');

    projects.forEach((project) => {
        const card = document.createElement('div');
        card.className = 'card mb-4';
        

        card.innerHTML = `
            <img src="${project.image}" class="card-img-top" alt="${project.title}">
            <div class="card-body">
                <h2 class="card-title">${project.title}</h2>
                <p class="card-text">${project.description}</p>
                <a href="${project.link}" class="btn btn-primary"><i class="bi bi-github"></i> 
                Repositório Github</a>
                <a href="${project.link}" class="btn btn-${project.visibility == "privado" ? "danger" : "success"}"><i class="bi bi-${project.visibility == "privado" ? "lock" : "unlock"}"></i> ${project.visibility} </a>
            </div>
        `;

        projectsContainer.appendChild(card);


    });
}

renderProjects();
