var altura =0
var largura=0
var vidas=1
var tempo = 15
var criaMosquitoTempo=1500


//pegando parametro da url(depois do ? incluindo o ?)
var nivel = window.location.search
//tirando o ?
nivel = nivel.replace("?","")

if (nivel==="normal") {
    //1500 ms
    var criaMosquitoTempo=1500
}else if (nivel==="dificil") {
    //1000 ms
    var criaMosquitoTempo=1000
}else{
    //750
    var criaMosquitoTempo=750
}

function telaJogo(){
    //pega altura e largura da pagina
     altura = window.innerHeight
     largura = window.innerWidth
    
}    
   
telaJogo()
//sistema para aparecer randomicamente as coordenadas

//cronometro do jogo
var cronometro = setInterval(function(){
    tempo -= 1
    //verifica se o usuario ganhou
    if (tempo<0) {
        clearInterval(cronometro)
        clearInterval(mosca)
        window.location.href= "ganhou.html"
    }

    //coloca o valor d tempo entre as tag d span
    document.getElementById("cronometro").innerHTML = tempo
    
},1000)

function criaMosquito(){

    //removendo o elemento anterior caso exista
    if(document.getElementById("mosquito")){
        document.getElementById("mosquito").remove()
        //verifica se o jogador possui vidas
        if (vidas > 3) {
            window.location.href = "fim.html"
        }else{
            //desconta pontos do jogo
            document.getElementById("v" + vidas).src= "imagens/coracao_vazio.png"
            vidas++
        }

        
    }

    var posicaox =  Math.floor(Math.random() *largura) - 90
    var posicaoy =  Math.floor(Math.random()* altura)  - 90
    
    posicaox = posicaox < 0 ? 0 : posicaox
    posicaoy = posicaoy < 0 ? 0 : posicaoy


    //criando elemento html
    var mosquito = document.createElement("img")
    //atribuindo imagem ao elemento
    mosquito.src = 'imagens/mosca.png'
    //atribuindo class no elemento
    mosquito.className = tamanhoAleatorio() +' ' + ladoAleatorio()
    //atribuindo as coordenadas ao elemento
    mosquito.style.left = posicaox + "px"
    mosquito.style.top = posicaoy + "px"
    mosquito.style.position = "absolute"
    //atribuindo o id no elemento
    mosquito.id = "mosquito"

    //aplicando o onlcick
    mosquito.onclick= function() {
        //remove o elemento se clicado
        this.remove()
    }

    //atribuindo o elemento no body
    document.body.appendChild(mosquito)

    

}

function tamanhoAleatorio() {
    var clase = Math.floor(Math.random()*3)

    switch(clase){
        case 0:
            return 'mosquito1'

        case  1:
            return 'mosquito2'

        case  2:
             return 'mosquito3'
    }

}

function ladoAleatorio() {
    var clase = Math.floor(Math.random()*2)

    switch(clase){
        case 0:
            return 'ladoA'

        case  1:
            return 'ladoB'
    }
}