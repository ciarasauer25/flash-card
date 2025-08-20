const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A paleontologia utiliza o estudo de fósseis para reconstruir ecossistemas antigos, compreender extinções em massa e traçar a evolução das espécies ao longo de milhões de anos. Entre os métodos utilizados estão a adaptação adiométrica, a análise de camadas geológicas e a comparação anatômica entre fósseis e seres vivos atuais. Com base nisso, qual das alternativas descreve corretamente uma aplicação prática da paleontologia?",
        alternativas: [
            "A) Utilizar fósseis para prever catástrofes naturais em tempo real, como terremotos e furacões.",
            "B) Analisar fósseis para entender como mudanças climáticas pasadas influenciaram a extinção de espécies."
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
     {
        enunciado: "Pergunta 3",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 4",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 5",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal;

function mostraPergunta() {
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent="";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada (alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
} 

mostraPergunta();

function respostaSelecionada(opcaoSelecionada){
   const afirmacoes= opcaoSelecionada.afirmacoes;
   historiaFinal= afirmacoes;
   historiaFinal  += afirmacoes +"";
   atual++;
   mostraPergunta();
}