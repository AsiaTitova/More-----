'use strict';

const menuList = document.querySelectorAll('.navigation__link');
const servesCatalog = document.getElementById('service-catalog');

const setNavigationListeners = () => {
    menuList.forEach(item => {
        if (item.innerHTML === 'Услуги') {
            item.addEventListener('click', openCatalog)
        }
    })
}

const openCatalog = () => {
    servesCatalog.classList.add('service-catalog_open');
}

setNavigationListeners();