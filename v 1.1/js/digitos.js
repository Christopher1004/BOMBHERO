let currentTimer = 0; // Variável global para armazenar o valor do timer
let timerInterval; // Variável para armazenar o identificador do intervalo
let numerosSelecionados = new Set(); // Para armazenar números distintos
const maxSelecionados = 4; // Número máximo de números distintos permitidos
const senhaCorreta = '1234'; // Senha correta

function startTimer(duration, display) {
    currentTimer = duration; // Inicializa a variável global
    let timer = duration, minutes, seconds;
    timerInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            display.textContent = "00:00";
            if (display.textContent === "00:00") {
                window.location = "falha.html";
            }
        }
        if (display.textContent <= "01:00") {
            document.querySelector("#Timer").classList.add('Erro2');
        }
        if (display.textContent <= "00:15") {
            document.querySelector(".gameArea").classList.add('Tremedeira');
        }
        currentTimer = timer; // Atualiza o valor global do timer
    }, 1000);
}
// função para piscar o timer quando errar
function TimerVermelho() {
    setInterval(function () {
        document.querySelector("#Timer").classList.add('Erro');
    }, 200);
    document.querySelector("#Timer").classList.remove('Erro');
}
function subtractOneMinute() {
    if (currentTimer > 60) { // Verifica se há tempo suficiente para subtrair
        currentTimer -= 60;
        // Atualiza o display com o novo valor
        const minutes = parseInt(currentTimer / 60, 10);
        const seconds = parseInt(currentTimer % 60, 10);
        const display = document.querySelector('#Timer');
        display.textContent = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);

        clearInterval(timerInterval);
        startTimer(currentTimer, display);
    }
}
function atualizarDigitos() {
    const digitos = document.querySelectorAll('.digito');
    digitos.forEach((digito, index) => {
        if (index < numerosSelecionados.size) {
            digito.classList.add('active');
        } else {
            digito.classList.remove('active');
        }
    });
}
function limparNumerosSelecionados(set) {
    set.clear(); // Remove todos os elementos do Set

    const digitos = document.querySelectorAll('.digito');
    digitos.forEach((digito) => {
        digito.classList.remove('active');
    });
}
function AbrirTampa(){
    const tampa = document.querySelector('.tampa');
    tampa.classList.add('mexer');
    setInterval(function () {
        $('.tampa').hide();
    }, 3000);
}

function FioAzul(){
    currentTimer += 120;
    
    // Atualiza o display com o novo valor
    const minutes = parseInt(currentTimer / 60, 10);
    const seconds = parseInt(currentTimer % 60, 10);
    const display = document.querySelector('#Timer');
    display.textContent = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
    
    // Reinicia o intervalo do timer com o novo tempo
    clearInterval(timerInterval);
    startTimer(currentTimer, display); 
}
var cortarFio = false;

    // Quando o botão da tesoura é clicado
    $('#tesoura').click(function () {
        cortarFio = true; // Ativa o estado de cortar fio
        console.log('Tesoura ativada! Clique em um fio para cortar.');
    });

    $('#fioAzul').click(function () {
        if (cortarFio) {
            $(this).hide(); // Esconde o fio clicado
            FioAzul();
            cortarFio = false; // Reseta o estado após cortar um fio
            
        } 
    });
document.getElementById('apagar').addEventListener('click', function () {
    limparNumerosSelecionados(numerosSelecionados);
})
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', function () {
        const numero = this.textContent;

        // Verifica se o número já foi selecionado
        if (numerosSelecionados.has(numero)) {
            // Se o número já foi selecionado, remove a seleção
         //   numerosSelecionados.delete(numero);
            this.classList.remove('selected');
        } 
        else {
            // Se o número não foi selecionado, adiciona à seleção
            if (numerosSelecionados.size < maxSelecionados) {
                numerosSelecionados.add(numero);
                this.classList.add('selected');
            }
        }
        // Atualiza a senha se tivermos 4 números distintos
        if (numerosSelecionados.size === maxSelecionados) {
            const senha = Array.from(numerosSelecionados).join('');
            //  document.getElementById('senha').textContent = senha;

            atualizarDigitos();

            // Verifica se a senha gerada é igual à senha correta
            if (senha === senhaCorreta) {
                alert('Senha correta! Acesso concedido.');
                AbrirTampa();
             //   
            } else {

                subtractOneMinute(); // Chama a função para subtrair 1 minuto
                document.querySelectorAll('.key').forEach(k => k.classList.remove('selected'));
                TimerVermelho();
                limparNumerosSelecionados(numerosSelecionados);
                console.log(numerosSelecionados);
            }

        } else {
            //  document.getElementById('senha').textContent = `${Array.from(numerosSelecionados).join(', ')}`;
            atualizarDigitos();
        }
    });
});

// Inicializa o cronômetro 
 window.onload = function () {
    const tenMinutes = 60 * 5;
    const display = document.querySelector('#Timer');
    startTimer(tenMinutes, display);
}; 

