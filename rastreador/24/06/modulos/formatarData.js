import { dados } from './data.js';

// Função para formatar os números de dias em strings de datas
function formatarDatas(objeto) {
    const datasFormatadas = {};
    for (const [dia, tempo] of Object.entries(objeto)) {
        const data = `06/${dia < 10 ? '0' + dia : dia}/2024`; // Adapte o ano conforme necessário
        datasFormatadas[data] = tempo;
    }
    return datasFormatadas;
}

// Chama a função para formatar os dados
const dadosFormatados = formatarDatas(dados);

// Exemplo de uso dos dados formatados
console.log(dadosFormatados);

export {dadosFormatados}