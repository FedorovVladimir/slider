/* Индекс слайда по умолчанию */
var slideIndexHair = 1;
showSlidesHair(slideIndexHair);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlideHair() {
    showSlidesHair(slideIndexHair += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlideHair() {
    showSlidesHair(slideIndexHair -= 1);
}

/* Основная функция сладера */
function showSlidesHair(n) {
    var i;
    var slides = document.getElementsByClassName("item_hair");
    if (n > slides.length) {
        slideIndexHair = 1
    }
    if (n < 1) {
        slideIndexHair = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexHair - 1].style.display = "block";
}
