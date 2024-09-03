document.addEventListener('DOMContentLoaded', function () {
    const numerosSelecionados = new Set(); // Para armazenar números distintos
    const maxSelecionados = 4; // Número máximo de números distintos permitidos
    const senhaCorreta = '1234'; // Senha correta

    document.querySelectorAll('.key').forEach(key => {
        key.addEventListener('click', function () {
            const numero = this.textContent;

            // Verifica se o número já foi selecionado
            if (numerosSelecionados.has(numero)) {
                // Se o número já foi selecionado, remove a seleção
                numerosSelecionados.delete(numero);
                this.classList.remove('selected');
            } else {
                // Se o número não foi selecionado, adiciona à seleção
                if (numerosSelecionados.size = maxSelecionados) {
                    numerosSelecionados.add(numero);
                    this.classList.add('selected');
                } 
            }

            // Atualiza a senha se tivermos 4 números distintos
            if (numerosSelecionados.size === maxSelecionados) {
                const senha = Array.from(numerosSelecionados).join('');
                document.getElementById('senha').textContent = senha;

                // Verifica se a senha gerada é igual à senha correta
                if (senha === senhaCorreta) {
                    alert('Senha correta! Acesso concedido.');
                    // Adicione qualquer ação adicional aqui, se necessário
                } else {
                    alert('Senha incorreta! Tente novamente.');
                }
                
                // Limpa a seleção após a verificação
                numerosSelecionados.clear();
                document.querySelectorAll('.key').forEach(k => k.classList.remove('selected'));
                document.getElementById('senha').textContent = 'Nenhuma senha formada';
            } else {
                document.getElementById('senha').textContent = `Selecionados: ${Array.from(numerosSelecionados).join(', ')}`;
            }
        });
    });
});
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            display.textContent = "00:00";
            if (display.textContent = "00:00") {
                window.location = "falha.html";
            }
        }
    }, 1000);
}

// Inicializa o cronômetro com 10 minutos (600 segundos)
/* window.onload = function () {
    const tenMinutes = 60 * 10;
    const display = document.querySelector('#Timer');
    startTimer(tenMinutes, display);
}; */

