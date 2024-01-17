 // Array de objetos representando os projetos
 const projects = [
    {
        title: "Projeto 1: Nome do Projeto",
        description: "Descrição do projeto...",
        completion: 50, // Porcentagem de conclusão
        link: "#"
    },
    {
        title: "Projeto 2: Nome do Projeto",
        description: "Descrição do projeto...",
        completion: 75, // Porcentagem de conclusão
        link: "#"
    },
    // Adicione mais projetos conforme necessário
];

// Função para criar e renderizar os cards de projeto
function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');

    projects.forEach((project) => {
        const card = document.createElement('div');
        card.className = 'card mb-4';
        card.innerHTML = `
            <div class="card-body">
                <h2 class="card-title">${project.title}</h2>
                <p class="card-text">${project.description}</p>
                <div class="progress mb-3">
                    <div class="progress-bar bg-success" role="progressbar" style="width: ${project.completion}%;" aria-valuenow="${project.completion}" aria-valuemin="0" aria-valuemax="100">${project.completion}% Concluído</div>
                </div>
                <a href="${project.link}" class="btn btn-primary">Detalhes do Projeto</a>
            </div>
        `;

        projectsContainer.appendChild(card);
    });
}

// Chamar a função para renderizar os projetos
renderProjects();