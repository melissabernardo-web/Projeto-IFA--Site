
let tamanhoFonte = 100;
function aumentarFonte(){
    tamanhoFonte += 10;
    document.body.style.fontSize = tamanhoFonte + "%";
}

function diminuirFonte(){
    if(tamanhoFonte > 80){
        tamanhoFonte -= 10;
        document.body.style.fontSize = tamanhoFonte + "%";
    }

}

function altoContraste(){
    document.body.classList.toggle("contraste");
}


function lerPagina(){
    speechSynthesis.cancel();
    let texto = document.body.innerText;
    let leitura = new SpeechSynthesisUtterance(texto);
    leitura.lang = "pt-BR";
    leitura.rate = 1;
    leitura.pitch = 1;
    speechSynthesis.speak(leitura);
}

const links = document.querySelectorAll("nav a");
links.forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        const destino =
        document.querySelector(this.getAttribute("href"));
        destino.scrollIntoView({
            behavior:"smooth"
        });
    });
});


const botaoTopo = document.createElement("button");
botaoTopo.innerHTML = "⬆";
document.body.appendChild(botaoTopo);
botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "20px";
botaoTopo.style.right = "20px";
botaoTopo.style.padding = "15px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.background = "#1565c0";
botaoTopo.style.color = "white";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.display = "none";
botaoTopo.style.fontSize = "20px";
botaoTopo.style.boxShadow =
"0 5px 10px rgba(0,0,0,.3)";
window.addEventListener("scroll", function(){
    if(window.scrollY > 300){
        botaoTopo.style.display = "block";
    }

    else{
        botaoTopo.style.display = "none";
    }

});
botaoTopo.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});


const secoes =
document.querySelectorAll("section");
const observador =
new IntersectionObserver(function(entradas){
    entradas.forEach(function(entrada){
        if(entrada.isIntersecting){
            entrada.target.style.opacity = "1";
            entrada.target.style.transform =
            "translateY(0)";
        }
    });
});

secoes.forEach(function(secao){
    secao.style.opacity = "0";
    secao.style.transform = "translateY(40px)";
    secao.style.transition = ".8s";
    observador.observe(secao);
});

const imagens =
document.querySelectorAll(".galeria img");
imagens.forEach(function(imagem){
    imagem.addEventListener("click", function(){
        window.open(imagem.src);
    });
});

console.log("Projeto Integrador carregado com sucesso!");