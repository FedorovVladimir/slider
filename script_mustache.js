/* Индекс слайда по умолчанию */
var slideIndexMustache = 1;
showSlidesMustache(slideIndexMustache);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlideMustache() {
    showSlidesMustache(slideIndexMustache += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlideMustache() {
    showSlidesMustache(slideIndexMustache -= 1);
}

/* Основная функция сладера */
function showSlidesMustache(n) {
    var i;
    var slides = document.getElementsByClassName("item_mustache");
    if (n > slides.length) {
        slideIndexMustache = 1
    }
    if (n < 1) {
        slideIndexMustache = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexMustache - 1].style.display = "block";
}
