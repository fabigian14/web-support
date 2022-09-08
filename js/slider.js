let slider = document.querySelector(".slider");
let cajaTestimonio = document.querySelectorAll(".slider .slider__content")
let contador = 1;
let tamanoCarrusel = cajaTestimonio[0].clientWidth;
let intervalo = 15000;

window.addEventListener("resize", function () {
    tamanoCarrusel = cajaTestimonio[0].clientWidth;
})


setInterval(function tiempo() {
    slides();
}, intervalo);


function slides() {
    slider.style.transform = 'translateX(' + (- tamanoCarrusel * contador) + 'px)';
    slider.style.transition = 'transform 1s';
    contador += 1;

    if (contador === cajaTestimonio.length) {
        contador = 0;
        setTimeout(function () {
            slider.style.transform = 'translateX (0 px)';
            slider.style.transition = 'transform 0s';
        }, intervalo)
    }
}