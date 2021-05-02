const animadoDer = document.querySelectorAll('.animadoDer');
const animadoIzq = document.querySelectorAll('.animadoIzq');

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (let i=0; i < animadoDer.length; i++) {
        let alturaAnimado = animadoDer[i].offsetTop;
        if(alturaAnimado - 400< scrollTop) {
            animadoDer[i].style.opacity = 1;
            animadoDer[i].classList.add("animacionDer")
        }
    }
    for (let i=0; i < animadoIzq.length; i++) {
        let alturaAnimado = animadoIzq[i].offsetTop;
        if(alturaAnimado - 900< scrollTop) {
            animadoIzq[i].style.opacity = 1;
            animadoIzq[i].classList.add("animacionIzq")
        }
    }
}

window.addEventListener('scroll', mostrarScroll);