function showPopunder() {

      // Verifica se já existe um iframe no popunder
      if (document.querySelector('.popunder iframe')) {
        return; // Sai da função se já houver um iframe em execução
    }
    
    document.getElementById('popunder').style.display = 'block';
    var iframe = document.createElement('iframe');
    iframe.src = 'video.html';
    iframe.className = 'popunder-video';
    document.getElementById('popunder').appendChild(iframe);
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
