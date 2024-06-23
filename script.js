// Array de objetos representando os projetos
const projects = [
    {
        title: "Loto Rede Social",
        description: "A proposta da <strong>Loto - Rede Social</strong> integrada ao site <a href='https://lotodicas.com.br/'>LotoDicas</a> é proporcionar aos usuários um ambiente de interação especializado em apostas, centrado em um chat intuitivo. Com funcionalidades de login e senha, os usuários podem se cadastrar em grupos de conversas específicas, criando uma comunidade envolvente e focada no compartilhamento de estratégias e dicas relacionadas ao campo de apostas. Essa plataforma busca unir entusiastas da loteria, proporcionando um espaço colaborativo para discutir estratégias, trocar experiências e fortalecer a comunidade de jogadores.",
        completion: 5, // Porcentagem de conclusão
        link: "https://lotodicas.netlify.app/",
        image: "/assets/imgs/projetos/lotosocial.jpg"
    },
    {
        title: "Relógio em Tempo Real com Horário de Brasília",
        description: "O projeto <strong>Relógio em Tempo Real com Horário de Brasília</strong> propõe a criação de um site interativo e responsivo, destacando-se pela precisão e atualização em tempo real do horário de Brasília. Além de oferecer uma experiência de usuário atraente e intuitiva, o projeto incluirá funcionalidades como visualização de fusos horários adicionais, um modo noturno para otimizar a legibilidade durante a noite, opções de personalização de design e suporte multilíngue. Com foco na praticidade e estética, o site busca atender às necessidades de usuários que buscam uma ferramenta confiável para acompanhar o horário de Brasília e de outras regiões relevantes globalmente.",
        completion: 87, // Porcentagem de conclusão
        link: "https://relogio-brasilia.netlify.app/",
        image: "/assets/imgs/projetos/relogio.jpg"
    },
    {
        title: "Cronômetro Online Multifuncional",
        description: "O projeto de <strong>Cronômetro Online Multifuncional</strong> propõe a criação de uma plataforma versátil que vai além da simples contagem de tempo. Este cronômetro integrado incluirá funcionalidades adicionais, como temporizador, despertador e relógio, proporcionando uma solução abrangente para as necessidades temporais dos usuários. Com uma interface intuitiva e de fácil navegação, os usuários poderão alternar entre as diferentes funções de forma eficiente, tornando-se uma ferramenta prática e completa para gerenciar o tempo em diversas situações do cotidiano.",
        completion: 55, // Porcentagem de conclusão
        link: "https://super-cronometro.netlify.app/",
        image: "/assets/imgs/projetos/cronometro.jpg"
    },
    {
        title: "Calculadora Online Dual",
        description: "O projeto da <strong>Calculadora Online Dual</strong> busca oferecer uma solução abrangente para diferentes necessidades matemáticas, apresentando uma versão simples e científica em uma única plataforma. A versão simples visa atender às operações básicas de maneira intuitiva e de fácil uso, ideal para cálculos cotidianos. Por outro lado, a versão científica oferecerá funcionalidades avançadas, como trigonometria, exponenciais e logaritmos, destinada a usuários que exigem capacidades mais específicas em seus cálculos. Com uma interface amigável, o projeto busca proporcionar uma experiência acessível e eficiente para uma ampla gama de usuários.",
        completion: 56, // Porcentagem de conclusão
        link: "https://supercalculadoraonline.netlify.app/",
        image: "/assets/imgs/projetos/calculadora.jpg"
    },
    {
        title: "Impostômetro em Tempo Real",
        description: "O <strong>Impostômetro em Tempo Real</strong> apresenta uma inovadora ferramenta de conscientização, proporcionando aos cidadãos brasileiros uma estimativa em tempo real do montante de impostos recolhidos no país, com base em cálculos e dados do ano anterior. Essa iniciativa visa não apenas informar sobre a carga tributária, mas também oferecer insights sobre a saúde financeira atual, promovendo uma compreensão mais abrangente dos aspectos fiscais e incentivando discussões informadas sobre as finanças públicas.",
        completion: 23, // Porcentagem de conclusão
        link: "https://impostometro-brasil.netlify.app/",
        image: "/assets/imgs/projetos/impostometro.jpg"
    },
    {
        "title": "Rastreador de Tempo",
        "description": "O <strong>Rastreador de Tempo de Trabalho</strong> oferece uma solução simples e eficiente para monitorar e reportar o tempo gasto em diferentes projetos. Este sistema permite registrar horas de trabalho de maneira precisa, facilitando a visualização do progresso e a comunicação do tempo dedicado a cada tarefa. Ele visa fornecer uma visão clara e detalhada do tempo investido em cada atividade, promovendo uma gestão de tempo mais eficaz e transparência para todas as partes envolvidas.",
        "completion": 23, // Porcentagem de conclusão
        "link": "projects/24/06/rastreador-tempo",
        "image": "/assets/imgs/projetos/rastreador_tempo.jpg"
    },
    {
        "title": "Script de Publicidade de Recompensa",
        "description": "O <strong>Script de Publicidade de Recompensa</strong> é uma ferramenta inovadora que permite aos usuários visualizar anúncios em troca de recompensas oferecidas pelo site. Este sistema incentiva o engajamento do usuário, ao mesmo tempo que gera receita publicitária. A cada anúncio assistido, o usuário é recompensado com benefícios específicos, promovendo uma experiência interativa e vantajosa tanto para o site quanto para seus visitantes.",
        "completion": 45, // Porcentagem de conclusão
        "link": "https://publicidade-recompensa.netlify.app/",
        "image": "/assets/imgs/projetos/publicidade_recompensa.jpg"
    }
    
    

    // Adicione mais projetos conforme necessário
];

// Função para criar e renderizar os cards de projeto
function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');

    projects.forEach((project) => {
        const card = document.createElement('div');
        card.className = 'card mb-4';
        
        // Adiciona uma classe de cor dinâmica com base na porcentagem de conclusão
        let progressBarColorClass = '';
        if (project.completion < 25) {
            progressBarColorClass = 'bg-danger'; // Vermelho para menos de 25%
        } else if (project.completion < 50) {
            progressBarColorClass = 'bg-warning'; // Amarelo para menos de 50%
        } else if (project.completion < 75) {
            progressBarColorClass = 'bg-info'; // Azul para menos de 75%
        } else {
            progressBarColorClass = 'bg-success'; // Verde para 75% ou mais
        }

        card.innerHTML = `
            <img src="${project.image}" class="card-img-top" alt="${project.title}">
            <div class="card-body">
                <h2 class="card-title">${project.title}</h2>
                <p class="card-text">${project.description}</p>
                <div class="progress mb-3 custom-progress">
                    <div class="progress-bar ${progressBarColorClass} custom-progress-bar" role="progressbar" style="width: ${project.completion}%;" aria-valuenow="${project.completion}" aria-valuemin="0" aria-valuemax="100">${project.completion}% Concluído</div>
                </div>
                <a href="${project.link}" class="btn btn-primary">Detalhes do Projeto</a>
            </div>
        `;

        projectsContainer.appendChild(card);

        // Adiciona a classe 'custom-progress-bar' após o elemento ser renderizado para ativar a animação
        setTimeout(() => {
            const progressBar = card.querySelector('.custom-progress-bar');
            progressBar.classList.add('custom-progress-bar');
        }, 0);
    });
}

// Chamar a função para renderizar os projetos
renderProjects();
