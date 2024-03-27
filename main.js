const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");
for (let i=0; i < botoes.lenght; i++){
botoes[i].onclick = function() {
    for(let j=0; j<botoes.lenght; j++){
        botoes[j].classlist.remove ('ativo');
        textos[j].classList.remove("ativo");
}
botoes[i].classList.add("ativo");
textos[i].classlist.add("ativo");
}