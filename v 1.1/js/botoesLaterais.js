$(document).ready(function () {
    // Função para o botão de sair
    var sairButton = document.getElementById('sair');
    sairButton.addEventListener('click', function () {
        window.location.href = '../pages/paginaInicial.html';
    });

    // Variável que indica se o jogador quer cortar um fio
    var cortarFio = false;

    // Quando o botão da tesoura é clicado
    $('#tesoura').click(function () {
        cortarFio = true; // Ativa o estado de cortar fio
        console.log('Tesoura ativada! Clique em um fio para cortar.');
    });

    // Evento de clique para cada fio (IDs únicos)
    $('#fioAzul, #fioVermelho, #fioAmarelo').click(function () {
        if (cortarFio) {
            $(this).hide(); // Esconde o fio clicado
            cortarFio = false; // Reseta o estado após cortar um fio
            console.log('Fio cortado: ' + $(this).attr('id')); // Mostra o ID do fio cortado no console
        } else {
            console.log('Tesoura não ativada!');
        }
    });
    let pilhas = $('.pilha'); // Seleciona todos os elementos com a classe 'pilha'
    
    $('#energia').click(function() {

            if (fioAmareloVerifica == 2) {

                if (pilhas.length !== 0) {
                    // Remove a última pilha da lista
                    $(pilhas[pilhas.length - 1]).remove();
                    // Atualiza a lista de pilhas
                    pilhas = $('.pilha');
                    if (pilhas.length == 0) {
                        vitoria();
                    }

                }
            } else if (fioAmareloVerifica == 1) {
                console.log("nao");
                window.location.href = 'cutsceneFalha.html';
            }
    });

});
