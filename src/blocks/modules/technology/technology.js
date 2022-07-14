'use strict';

(function () {
    const carousel = document.getElementById('carousel-technology');

    let width = 370; // ширина пункта + отступ между ними
    let count = 4; // видимое количество изображений

    const list = carousel.querySelector('ul');
    const listElems = carousel.querySelectorAll('li');

    let position = 0; // положение ленты прокрутки

    carousel.querySelector('.technology__button_prev').onclick = function() {
        // сдвиг влево
        position += width  * count;
        position = Math.min(position, 0)
        list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.technology__button_next').onclick = function() {
        // сдвиг вправо
        position -= width  * count;
        position = Math.max(position, -width * (listElems.length - count));
        list.style.marginLeft = position + 'px';
    };
})();