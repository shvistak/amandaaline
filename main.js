const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-02-04T00:00:00");
let tempoAtual = new Date ();
contadores[0].textContent = tempoObjetivo1 - tempoAtual;

for (let i=0; i < botoes.lenght; i++){
botoes [i].onclick = function() {
    for (let j=0; j<botoes.lenght; j++){
        botoes[j].classlist.remove ("ativo");
        textos[j].classList.remove("ativo");
    }
botoes [i].classList.add("ativo");
textos [i].classlist.add("ativo");
}
}