const nameProject = 'Rastreador de Tempo';
const descriptionProject = 'O Rastreador de Tempo de Trabalho oferece uma solução simples e eficiente para monitorar e reportar o tempo gasto em diferentes projetos.'



const versoes = [
  {
    titulo: 'Versão 1',
    status: 'concluido',
    commits: [
      { status: 'f', mensagem: 'criação do algoritmo simples para começar desenvolver o design.' },
      { status: 'f', mensagem: 'add favicon e logo do site para imersão'},
      { status: 'f', mensagem:  'add estelização parecido com o site de implantação'},
      { status: 'f', mensagem: 'add primeira versão rústica do popunder'},
      { status: 'f', mensagem: 'add um vídeo publicitário de modelo'},
    ]
  },
  {
    titulo: 'Versão 2',
    status: 'concluido',
    commits: [
      { status: 'f', mensagem: 'add o sistema de gerenciamento' },
      { status: 'f', mensagem: 'inserir title "Anúncio de 15 Segundos" nas futuras versoes' },
      { status: 'f', mensagem:  'remover a borda do anúncio, e deixar o botão de "x" dentro do anúncio do vídeo'},
      { status: 'f', mensagem: 'substituir o código de fechamento "x" pelo icon de close do booststrap' },
    ]
  },
  {
    titulo: 'Versão 3',
    status: 'concluido',
    commits: [
      { status: 'f', mensagem: 'anuncio teste: iniciar vídeo automáticamente'},
      { status: 'f', mensagem: 'coloquei o style/css e o script/js para arquivos externos' },
      { status: 'f', mensagem:  'info abaixo do botão'},
    ]
  },
  {
  titulo: 'Versão 4',
  status: 'concluido',
  commits: [
    { status: 'f', mensagem:  'versao em iframe' },
  ]
},
{
  titulo: 'Versão 5',
  status: 'concluido',
  commits: [
    { status: 'f', mensagem: 'remover função em iframe, pois o adsense não permite para evitar fraudes' },
    { status: 'f', mensagem: 'o vídeo é renderizado direto pelo js e não está mais disponível no html, assim não permitindo o bug de iniciar sozinho' },

  ]
},
{
titulo: 'Versão 6',
status: 'concluido',
commits: [
  { status: 'f', mensagem: 'evitar que a msg de contagem regressiva seja ativa várias vezes ao clicar, ela precisa reiniciar apenas uma vez assim como o vídeo'},
  { status: 'f', mensagem: 'adicionar nova versão de gerenciamento com tasks de marcação independente por tarefas' },
  { status: 'f', mensagem: 'add link para página de gerenciamento - o logo já leva para lá' },
  { status: 'f', mensagem: 'consertar botão de pause' },

]
},
{
  titulo: 'Versão 7',
  status: 'desenvolvimento',
  commits: [
    { status: 'a', mensagem: 'remover botão "pause", pq o intuito é anuncio google ads no qual não temos acesso ao controle, apenas no anuncio premium original admob'},
    { status: 'a', mensagem: 'aumentar tamanho do icon close, principalmente para ser facilmente usado em mobile' },
    { status: 'f', mensagem: 'modificar script de gerenciamento para o status ser apenas "a" de aberto ou "f" de fechado' },

  
  ]
  },

  {
    titulo: 'Features e Bugs Futuros',
    status: 'aguardando',
    commits: [        


    ]
  }
];

document.querySelector('.titleProject').innerText = nameProject;
document.querySelector('.descriptionProject').innerText = descriptionProject;
document.title = nameProject;

// Função para remover acentos de uma string
function removerAcentos(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// Função para remover espaços de uma string
function removerEspacos(str) {
  return str.replace(/\s+/g, ''); // Substitui todos os espaços por uma string vazia
}

// Função para criar e adicionar cards ao documento
function criarCards() {
  const cardsContainer = document.getElementById('cards-container');
  cardsContainer.classList.add('d-flex', 'flex-wrap'); // Adicionando classes flexíveis

  versoes.forEach((versao) => {
    // Remover acentos e espaços do título para criar o link
    const link = versao.status === 'aguardando' ? '#' : '/versoes/' + removerEspacos(removerAcentos(versao.titulo.toLowerCase()));

    const card = document.createElement('div');
    card.className = 'col-md-6 mb-3 subCard'; // Adicionando classe de margem inferior para espaçamento entre as linhas
    card.innerHTML = `
    <div class="card">
      <div class="card-body">
        <a href="${link}" class="btn ${getBotaoClasse(versao.status)} display-1">${versao.titulo}</a>
        ${versao.commits.length > 0 ? `<p class="card-text lead">Principais Commits</p>` : ''}
        <ul class="list-group">
          ${versao.commits.map(commit => `<li class="list-group-item"><i class="${getIcone(commit.status)}"></i>${commit.mensagem}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;

    cardsContainer.appendChild(card);
  });
}

// Função para obter a classe do botão com base no status
function getBotaoClasse(status) {
  if (status === 'concluido') {
    return 'btn btn-success display-1';
  } else if (status === 'aguardando') {
    return 'btn btn-secondary display-1';
  } else {
    return 'btn btn-danger display-1';
  }
}

// Função para obter o ícone com base no status
function getIcone(status) {
  if (status === 'f') {
    return 'bi bi-check2-square';
  } else {
    return 'bi bi-square';
  }
}

// Chamar a função para criar os cards
criarCards();
