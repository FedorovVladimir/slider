/* Индекс слайда по умолчанию */
var slideIndexMouth = 1;
showSlidesMouth(slideIndexMouth);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlideMouth() {
    showSlidesMouth(slideIndexMouth += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlideMouth() {
    showSlidesMouth(slideIndexMouth -= 1);
}

/* Основная функция сладера */
function showSlidesMouth(n) {
    var i;
    var slides = document.getElementsByClassName("item_mouth");
    if (n > slides.length) {
        slideIndexMouth = 1
    }
    if (n < 1) {
        slideIndexMouth = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexMouth - 1].style.display = "block";
}
