
let $conteudo = document.querySelectorAll('#conteudo')

function displayConteudo(e) {
    texto = e.target.nextElementSibling
    if (texto.classList.contains('maisInformacoes')) {
        texto.classList.remove('maisInformacoes')
        e.target.classList.add('bold')
    }else {
        texto.classList.add('maisInformacoes')
        e.target.classList.remove('bold')
    }
    
} 

$conteudo.forEach(function(botao){
    botao.onclick = displayConteudo
})
