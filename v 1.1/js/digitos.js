let currentTimer = 0; // Variável global para armazenar o valor do timer
let timerInterval; // Variável para armazenar o identificador do intervalo
let numerosSelecionados = new Set(); // Para armazenar números distintos
const maxSelecionados = 4; // Número máximo de números distintos permitidos
const senhaCorreta = '5623'; // Senha correta
window.senhaVerificada = false;

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
function FioVermelho() {
    window.location.href = 'cutsceneFalha.html'; // Redireciona para a página de falha
}

let pilhas = $('.pilha');
let fioAmareloVerifica = 1;

function FioAmarelo() {
    if (fioAmarelo.cortarFio = false || senhaVerificada === false) { // Use === for comparison, not =
        window.location.href = 'cutsceneFalha.html';
        // Lógica adicional se necessário
    } else if (fioAmarelo.cortarFio = false || senhaVerificada === true) {
        fioAmareloVerifica = 2;
        console.log(fioAmareloVerifica);
    }
}

function verificarSenha() {
    const senha = Array.from(numerosSelecionados).join('');
    if (senha === senhaCorreta) {
        window.senhaVerificada = true; // Define a senha como verificada globalmente
        AbrirTampa();

        const audio = document.getElementById('sound-effect-senha'); // assume you have an <audio> element with this id
        audio.play();
    } else {
        subtractOneMinute(); // Chama a função para subtrair 1 minuto
        TimerVermelho();
        limparNumerosSelecionados(numerosSelecionados);
        window.senhaVerificada = false; // Define a senha como não verificada globalmente
        const audio = document.getElementById('sound-effect-erro'); // assume you have an <audio> element with this id
        audio.play();
    }
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

    $('#fioVermelho').click(function () {
        if (cortarFio) {
            $(this).hide(); // Esconde o fio clicado
            FioVermelho(); // Redireciona para a página de falha
            cortarFio = false; // Reseta o estado após cortar um fio
        }
    });

    $('#fioAmarelo').click(function () {
        if (cortarFio) {
            $(this).hide(); // Esconde o fio clicado
            FioAmarelo(); // Verifica se todas as pilhas foram removidas
            cortarFio = false; // Reseta o estado após cortar um fio
        }
    });


document.getElementById('apagar').addEventListener('click', function () {
    limparNumerosSelecionados(numerosSelecionados);
})
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', function() {
        const numero = this.textContent;
        if (numerosSelecionados.has(numero)) {
            this.classList.remove('selected');
            numerosSelecionados.delete(numero);
        } else {
            if (numerosSelecionados.size < maxSelecionados) {
                numerosSelecionados.add(numero);
                this.classList.add('selected');
            }
        }
        if (numerosSelecionados.size === maxSelecionados) {
            atualizarDigitos();
            verificarSenha(); // Verifica a senha quando 4 números distintos são selecionados
        } else {
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

let vitoria = function () {
    window.location.href = 'sucesso.html';
};

function playSound() {
    const audio = document.getElementById('sound-effect'); // assume you have an <audio> element with this id
    audio.play();
  }
  
  document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', function() {
      // your existing code here...
      playSound(); // add this line to play the sound
    });
  });
