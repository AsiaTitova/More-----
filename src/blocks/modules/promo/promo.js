'use strict';

(function () {
    const carousel = document.getElementById('promo-slider');
    const list = carousel.querySelector('.promo__list');
    const listElems = carousel.querySelectorAll('.promo__item');
    const prev = document.querySelector('.promo__control-button_prev');
    const next = document.querySelector('.promo__control-button_next');

    const dots = document.querySelectorAll('.dots__dot');

    let width = 1430; // ширина пункта + отступ между ними
    let count = 1; // видимое количество изображений;
    let step = 0;
    let position = 0; // положение ленты прокрутки

    const addClass = (elem, className) => {
        elem.classList.add(className);
    }

    const removeClass = (elem, className) => {
        elem.classList.remove(className);
    }

    const setPrevSlide = () => {
        // сдвиг влево
        if (listElems.length - step === 3) {
            step = 2;
            position = -width * (listElems.length - count);
            list.style.marginLeft = position + 'px';
        } else {
            position += width * count;
            position = Math.min(position, 0)
            step--;
            list.style.marginLeft = position + 'px';
        }
        setActiveSlide(step);
    }

    const setNextSlide = () => {
        // сдвиг вправо
        if (listElems.length - step === 1) {
            step = 0;
            position = 0;
            list.style.marginLeft = 0 + 'px';
        } else {
            position -= width  * count;
            position = Math.max(position, -width * (listElems.length - count));
            step++
            list.style.marginLeft = position + 'px';
        }
        setActiveSlide(step);
    }

    const setActiveSlide = (index) => {
        dots.forEach(item => {
            removeClass(item, 'dots__dot_active');
        })
        addClass(dots[index], 'dots__dot_active');
    }

    const changeActiveDot = (evt) => {
        let index = Number(evt.target.id);
        position = index === 0 ? 0 : -width * count * index;
        list.style.marginLeft = position + 'px';
        step = index;
        setActiveSlide(index);
    }

    prev.addEventListener('click', setPrevSlide);
    next.addEventListener('click', setNextSlide);

    dots.forEach(item => {
        item.addEventListener('click', changeActiveDot);
    })
})();