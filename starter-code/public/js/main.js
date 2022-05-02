const itensNavegacao = document.querySelectorAll(".item-navegacao")

    switch (window.location.pathname){

        case "/starter-code/index.html":
            for(i=1;i<itensNavegacao.length;i++){
                itensNavegacao[i].style.border="none"
            }
            break;
        case "/starter-code/pages/destination-index.html":
                for(i=0;i<itensNavegacao.length;i++){
                    i != 1 ? itensNavegacao[i].style.border="none" : console.log()
                }
                break;
        case "/starter-code/pages/crew-index.html":
            for(i=0;i<itensNavegacao.length;i++){
                i != 2 ? itensNavegacao[i].style.border="none" : console.log()
            }
            break;
        case "/starter-code/pages/technology-index.html":
            for(i=2;i<itensNavegacao.length;i--){
                itensNavegacao[i].style.border="none"
            }
            break;
    }

