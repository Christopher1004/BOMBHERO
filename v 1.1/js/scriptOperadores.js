function mostrarInteligencia() {
    // Esconde o conteúdo de Operador e mostra o de Inteligência
    document.getElementById('detalhes-operador').style.display = 'none';
    document.getElementById('imagem-operador').style.display = 'none';
    
    document.getElementById('detalhes-inteligencia').style.display = 'block';
    document.getElementById('imagem-inteligencia').style.display = 'block';
    
    // Muda a cor de fundo dos botões
    document.getElementById('btn-inteligencia').style.backgroundColor = 'white';
    document.getElementById('btn-inteligencia').style.color = 'black';

    document.getElementById('btn-operador').style.backgroundColor = 'black';
    document.getElementById('btn-operador').style.color = 'white';
}

function mostrarOperador() {
    // Esconde o conteúdo de Inteligência e mostra o de Operador
    document.getElementById('detalhes-inteligencia').style.display = 'none';
    document.getElementById('imagem-inteligencia').style.display = 'none';
    
    document.getElementById('detalhes-operador').style.display = 'block';
    document.getElementById('imagem-operador').style.display = 'block';
    
    // Muda a cor de fundo dos botões
    document.getElementById('btn-operador').style.backgroundColor = 'white';
    document.getElementById('btn-operador').style.color = 'black';

    document.getElementById('btn-inteligencia').style.backgroundColor = 'black';
    document.getElementById('btn-inteligencia').style.color = 'white';
}


