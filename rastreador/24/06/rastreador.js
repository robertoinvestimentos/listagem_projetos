document.addEventListener("DOMContentLoaded", function() {
    const dados = {
        "01/05": null, "02/05": null, "03/05": null, "04/05": null, "05/05": null,
        "06/05": null, "07/05": null, "08/05": null, "09/05": null, "10/05": 25,
        "11/05": 19, "12/05": 75, "13/05": 168, "14/05": 187, "15/05": 25,
        "16/05": 228, "17/05": 152, "18/05": null, "19/05": null, "20/05": 70,
        "21/05": 162, "22/05": 180, "23/05": 255, "24/05": 180, "25/05": 26,
        "26/05": 52, "27/05": 149, "28/05": 167, "29/05": 325, "30/05": 244,
        "31/05": 97
    };

    const diasList = document.getElementById("dias-list");

    for (const dia in dados) {
        const valor = dados[dia] === null ? "-" : dados[dia];
        const item = document.createElement("li");
        item.className = "list-group-item";
        item.textContent = `${dia}: ${valor}`;
        diasList.appendChild(item);
    }
});
