var conteudoHeader = document.getElementById('conteudo-header')
var btnMenu = document.getElementById('icone-menu')

menuLateral = false

function chamarMenuLateral(){
    menuLateral = !menuLateral

    if(menuLateral){
        conteudoHeader.style.left = '0px'
    }
    else{
        conteudoHeader.style.left = '-200px'
    }

}


