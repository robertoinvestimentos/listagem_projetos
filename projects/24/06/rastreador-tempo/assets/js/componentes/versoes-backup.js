  
  const versoes = [
    {
      titulo: 'Versão 1',
      status: 'concluido',
      commits: [
        'criação do algoritmo simples para começar desenvolver o design.',
        'add favicon e logo do site para imersão',
        'add estelização parecido com o site de implantação',
        'add primeira versão rústica do popunder',
        'add um vídeo publicitário de modelo', 
      ]
    },
     {
      titulo: 'Versão 2',
      status: 'concluido',
      commits: [
        'coloquei data por extenso no relógio',
        'add o sistema de gerenciamento',
        'inserir title "Anúncio de 15 Segundos" nas futuras versoes',
        'remover a borda do anúncio, e deixar o botão de "x" dentro do anúncio do vídeo',
        'substituir o código de fechamento "x" pelo icon de close do booststrap',

      ]
    },
    {
      titulo: 'Versão 3',
      status: 'concluido',
      commits: [
        'anuncio teste: iniciar vídeo automáticamente',
        'coloquei o style/css e o script/js para arquivos externos',
        'info abaixo do botão',


      ]
    },
    {
      titulo: 'Versão 4',
      status: 'concluido',
      commits: [
        'versao em iframe',

      ]
    },
    {
      titulo: 'Versão 5',
      status: 'concluido',
      commits: [
        'remover funaco em iframe, pois o adsense não permite para evitar fraudes',
        'o vídeo é renderizado direto pelo js e não está mais disponível no html, assim não permitindo o bug de iniciar sozinho',

      ]
    },
    {
      titulo: 'Versão 6',
      status: 'desenvolvimento',
      commits: [
        'evitar que a msg de contagem regressiva seja ativa várias vezes ao clicar, ela precisa reiniciar apenas uma vez assim como o vídeo',
        'adicionar nova versão de gerenciamento com tasks de marcação independente por tarefas',

      ]
    },
    {
      titulo: 'Features e Bugs Futuros',
      status: 'aguardando',
      commits: [        
        'anuncio teste: iniciar vídeo automáticamente',
        'bug: as vezes o anuncio ativa mesmo sem apertar no botão',
      ]
    },


  ];
  
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
          <i class="${getIconeClasse(versao.status)}"></i>
          <p class="card-text lead">Principais Commits</p>
          <ul class="list-group">
            ${versao.commits.map(commit => `<li class="list-group-item"><i class="${getCommitIconeClasse(versao.status)}"></i>${commit}</li>`).join('')}
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
  
  // Função para obter a classe do ícone com base no status
  function getIconeClasse(status) {
    return status === 'concluido' ? 'bi bi-check-circle text-success' : (status === 'aguardando' ? 'bi bi-clock text-secondary' : 'bi bi-exclamation-triangle text-danger');
  }
  
  // Função para obter a classe do ícone do commit com base no status
function getCommitIconeClasse(status) {
  return status === 'concluido' || status === 'desenvolvimento'
    ? 'bi bi-check2-square'
    : 'bi bi-square';
}
  
  // Chamar a função para criar os cards
  criarCards();
  