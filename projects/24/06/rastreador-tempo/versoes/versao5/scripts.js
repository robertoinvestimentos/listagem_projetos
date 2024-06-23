var isVideoOpen = false; // Variável para controlar se o vídeo está aberto ou não

function showPopunder() {
    // Verifica se o vídeo já está aberto antes de abrir outro
    if (!isVideoOpen) {
        document.getElementById('popunder').style.display = 'block';
        document.getElementById('rewardMessage').style.display = 'block';

        // Cria o elemento de vídeo
        var video = document.createElement('video');
        video.id = 'popVideo';
        video.className = 'popunder-video';
        video.autoplay = true;

        // Adiciona a source do vídeo
        var source = document.createElement('source');
        source.src = 'publicidade.mp4';
        source.type = 'video/mp4';

        // Adiciona a source ao vídeo
        video.appendChild(source);

        // Adiciona o vídeo ao popunder
        document.getElementById('popunder').appendChild(video);

        isVideoOpen = true; // Atualiza o estado do vídeo para aberto
        startRewardCountdown(); // Inicia a contagem regressiva
    }
}

function closePopunder() {
    document.getElementById('popunder').style.display = 'none';

    // Remove o vídeo do popunder ao fechá-lo
    var video = document.getElementById('popVideo');
    if (video) {
        video.remove();
        isVideoOpen = false; // Atualiza o estado do vídeo para fechado
    }

    // Limpa o conteúdo da mensagem de recompensa
    document.getElementById('rewardMessage').innerHTML = '';
}

function startRewardCountdown() {
    var count = 15; // Tempo em segundos
    var countdownInterval = setInterval(function() {
        document.getElementById('rewardMessage').innerHTML = 'Aguarde ' + count + ' segundos para a recompensa';
        count--;
        if (count < 0) {
            clearInterval(countdownInterval);
            document.getElementById('rewardMessage').innerHTML = 'Você recebeu a recompensa!';
            setTimeout(closePopunder, 2000); // Fecha o popunder após 500 milissegundos (0.5 segundos)
        }
    }, 1000); // Intervalo de 1 segundo
}

document.getElementById('popunderBtn').addEventListener('click', function() {
    showPopunder();
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
