/* Индекс слайда по умолчанию */
var slideIndexEyes = 1;
showSlidesEyes(slideIndexEyes);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlideEyes() {
    showSlidesEyes(slideIndexEyes += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlideEyes() {
    showSlidesEyes(slideIndexEyes -= 1);
}

/* Основная функция сладера */
function showSlidesEyes(n) {
    var i;
    var slides = document.getElementsByClassName("item_eyes");
    if (n > slides.length) {
        slideIndexEyes = 1
    }
    if (n < 1) {
        slideIndexEyes = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexEyes - 1].style.display = "block";
}
