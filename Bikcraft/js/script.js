// Ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link){
    const url = location.href;
    const href= link.href

    if(url.includes(href)){
        link.classList.add("ativo")
    }
}

links.forEach(ativarLink)

// Ativar items do orçamento
const parametros= new URLSearchParams(location.search);

function ativarProduto(parametro){
    console.log(parametro);
    const elemento = document.getElementById(parametro)
    if(elemento){
        elemento.checked=true;
    }
}

parametros.forEach(ativarProduto);

//Perguntas frequentes
const pergunutas= document.querySelectorAll(".perguntas button");

function ativarPergunta(event){
    const pergunta= event.currentTarget;
    const controls= pergunta.getAttribute('aria-controls')
    const resposta= document.getElementById(controls);
    resposta.classList.toggle('ativa')
    console.log(resposta);
}

function eventosPerguntas(pergunta){
    pergunta.addEventListener('click', ativarPergunta)
}

pergunutas.forEach(eventosPerguntas);
