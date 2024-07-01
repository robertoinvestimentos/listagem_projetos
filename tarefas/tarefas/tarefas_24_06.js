const tarefas = {
    '25/06/24 - Ter': {
        'Reunião': [
            { tarefa: 'reunião com seu Roberto', status: 'y' },
        ],
        'RobertoInvestimentos - Gerenciador de Projetos': [
            { tarefa: 'resolver problema de git do "roberto_investimentos"', status: 'y' }
        ],
        'Rastreador de Tarefas': [
            { tarefa: 'resolver digito coluna tempo minutos', status: 'y' },
            { tarefa: 'desenvolvimento do algorítmo do rastreador', status: 'y' }
        ]
    },
    '26/06/24 - Qua': {
        'Rastreador de Tarefas': [
            { tarefa: 'estelizando tarefas', status: 'y' },
            { tarefa: 'adicionar qual projeto está sendo trb', status: 'y' },
            { tarefa: 'add status de conclusão', status: 'y' },
            { tarefa: 'esconder os cards de dias que não tem nenhuma tarefa', status: 'y' },
            {tarefa: 'inserir expandir/esconder informação no card de dia e projetos', status: 'y' },
            { tarefa: 'no gerenciador de versões, adicionar versão futura para caputar o tempo gasto no dia', status: 'n'},
            {tarefa: 'reconhecer data atual e modificar o btn do day para btn-success', status: 'y' },
            {tarefa: 'adicionar mouse mão no title project'},
            {tarefa: 'adicionar id nos "task-date" para voltar ao lugar caso atualize a página'},
        ],
        'RobertoInvestimentos - Gerenciador de Projetos': [
            { tarefa: 'resolver problema de deploy no servidor do netlify', status: 'n' },
            {tarefa: 'fazer deploy por linha de comando ao inves de git push do repositório para não estressar servidor do netlify', status: 'n'},
        ],
        'LotoDicas v1': [
            { tarefa: 'resolver problema de deploy no servidor do netlify', status: 'y' },
            {tarefa: 'fazer deploy por linha de comando ao inves de git push do repositório para não estressar servidor do netlify', status: 'y'},
            {tarefa: 'decidir se vou continuar usando js simple em netlify + funções netlify, ou flask no servidor -> por segurança é melhor desenvolver em flask python + firebase para db rápido', status: 'y'},
            {tarefa: 'criar nova versão para chat agora desenvolvido em flask', status: 'n'},
        ],
    },

}


export { tarefas };
