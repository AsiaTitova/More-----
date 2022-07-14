'use strict';

const servesCatalogCross = document.querySelector('.service-catalog__button-cross');
const servesCatalog = document.getElementById('service-catalog');


const closeCatalog = () => {
    servesCatalog.classList.remove('service-catalog_open');
}

servesCatalogCross.addEventListener('click', closeCatalog)