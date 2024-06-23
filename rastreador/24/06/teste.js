console.log('teste');
document.getElementById('teste').innerHTML = 'teste';
// Função para carregar e manipular os dados do JSON
async function carregarDados() {
    try {
        // Carrega o JSON
        const response = await fetch('rastreador_24_06.json');
        const data = await response.json();

        // Extraindo as informações do JSON
        const keys = Object.keys(data);
        const values = Object.values(data);

        // Exemplo de uso dos dados
        console.log(keys);   // Mostra as chaves do JSON (números dos dias)
        console.log(values); // Mostra os valores do JSON (minutos trabalhados)

        // Atualize o HTML com as informações obtidas do JSON
        const elementoHTML = document.getElementById('dadosJson');
        elementoHTML.innerHTML = `Chaves: ${keys.join(', ')}<br>Valores: ${values.join(', ')}`;
    } catch (error) {
        console.error('Erro ao carregar e manipular os dados:', error);
    }
}

// Chama a função para carregar os dados quando a página carregar
window.onload = carregarDados;