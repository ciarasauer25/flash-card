const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativa = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"A paleontologia utiliza o estudo de fósseis para reconstruir ecossistemas antigos, compreender extinções em massa e traçar a evolução das espécies ao longo de milhões de anos. Entre os métodos utilizados estão a adaptação adiométrica, a análise de camadas geológicas e a comparação anatômica entre fósseis e seres vivos atuais",
        alternativa:[  "alternativa 1","alternativa 2"  ]
    },
    {
        enunciado:"pergunta 2",
        alternativa:[  "alternativa 1","alternativa 2"  ]
    },
    {
        enunciado:"pergunta 3",
        alternativa:[  "alternativa 1","alternativa 2"  ]
    },
    {
        enunciado:"pergunta 4",
        alternativa:[  "alternativa 1","alternativa 2"  ]
    },
    {
        enunciado:"pergunta 5",
        alternativa:[  "alternativa 1","alternativa 2"  ]
    },
];
    
     let atual=0;
     let perguntaAtual;
     function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
     }
     mostraPergunta()