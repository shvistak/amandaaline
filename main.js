const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");
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
const tempoObjetivo1 = new Date("2024-02-04T00:00:00");
const tempoObjetivo2 = new Date("2024-04-04T00:00:00");
const tempoObjetivo3 = new Date("2024-04-04T00:00:00");
const tempoObjetivo4 = new Date("2024-04-04T00:00:00");
const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];
function atualizaCronometro(){
for (let i = 0; i < contadores.length; i++) {
contadores[i].textContent = calculaTempo(tempos[i]);
}
}
function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}
comecaCronometro();
function calculaTempo(tempoObjetivo){
     let tempoAtual =new Date();
     let tempoFinal = tempoObjetivo - tempoAtual;
     let segundos = Math.floor(tempoFinal / 1000);
     let minutos = Math.floor(segundos / 60);
     let horas = Math.floor(minutos / 60);
     let dias = Math.floor(horas / 24);
    
     segundos %= 60;
     minutos %= 60;
     horas %= 24;
     
     if (tempoFinal > 0){
     return dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";
     }else {
        return "Prazo Finalizado";
     }
}