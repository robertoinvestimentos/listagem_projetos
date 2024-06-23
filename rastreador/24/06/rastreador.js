document.getElementById('teste').innerHTML = 'teste';


console.log('teste');
// Importando o arquivo JSON
import data from './rastreador_24_06.json';

// Extraindo as informações do JSON
const keys = Object.keys(data);
const values = Object.values(data);

// Adicionando as informações ao HTML
keys.forEach((key, index) => {
    const dayElement = document.getElementById(`day-${key}`);
    if (dayElement) {
        dayElement.textContent = key;
    }

    const valueElement = document.getElementById(`value-${key}`);
    if (valueElement) {
        valueElement.textContent = values[index] !== null ? `${values[index]} minutos` : 'N/A';
    }
});
