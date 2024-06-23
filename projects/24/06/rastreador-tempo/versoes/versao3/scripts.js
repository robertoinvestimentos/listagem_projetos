function showPopunder() {
    document.getElementById('popunder').style.display = 'block';
    document.getElementById('popVideo').play(); // Inicia o vídeo apenas quando o botão for clicado
}

function closePopunder() {
    document.getElementById('popunder').style.display = 'none';
}

function startRewardCountdown() {
    var count = 15; // Tempo em segundos
    var countdownInterval = setInterval(function() {
        document.getElementById('rewardMessage').innerHTML = 'Aguarde ' + count + ' segundos para a recompensa';
        count--;
        if (count < 0) {
            clearInterval(countdownInterval);
            document.getElementById('rewardMessage').innerHTML = 'Você recebeu a recompensa!';
        }
    }, 1000); // Intervalo de 1 segundo
}

document.getElementById('popunderBtn').addEventListener('click', function() {
    showPopunder();
    startRewardCountdown(); // Inicia a contagem regressiva após o popunder ser exibido
});

// Função para pausar/reproduzir o vídeo
function toggleVideoPlay() {
    var video = document.getElementById('popVideo');
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}
