let currentPage = 'operador';

function mostrarInteligencia() {
    // Esconde o conteúdo de Operador e mostra o de Inteligência
    $('#detalhes-operador').hide();
    $('#imagem-operador').hide();
    
    $('#detalhes-inteligencia').show();
    $('#imagem-inteligencia').show();
    
    // Muda a cor de fundo dos botões
    $('#btn-inteligencia').css({'background-color': 'white', 'color': 'black'});
    $('#btn-operador').css({'background-color': 'black', 'color': 'white'});
    
    currentPage = 'inteligencia';
}

function mostrarOperador() {
    // Esconde o conteúdo de Inteligência e mostra o de Operador
    $('#detalhes-inteligencia').hide();
    $('#imagem-inteligencia').hide();
    
    $('#detalhes-operador').show();
    $('#imagem-operador').show();
    
    // Muda a cor de fundo dos botões
    $('#btn-operador').css({'background-color': 'white', 'color': 'black'});
    $('#btn-inteligencia').css({'background-color': 'black', 'color': 'white'});
    
    currentPage = 'operador';
}

$('#comecar').click( function() {
    if (currentPage === 'inteligencia') {
        location.href = 'inteligencia.html';
    } else {
        location.href = 'cutscene.html';
    }
});