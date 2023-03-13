import { homePage } from './pages/home.js';
import { menuPage } from './pages/menu.js';
import { contactPage } from './pages/contact.js';
import { renderPage } from './functions/render-page.js';
import { firstLoad } from './functions/first-load.js';

import './style.css';

firstLoad();

const changeHome = (() => {
    const headerButton = document.getElementById('header-home');

    headerButton.addEventListener('click', () => {

        renderPage();
        homePage();
    })
})();

const changeAbout = (() => {
    const headerButton = document.getElementById('header-about');

    headerButton.addEventListener('click', () => {
        console.log('about');
    })
})();

const changeMenu = (() => {
    const headerButton = document.getElementById('header-menu');

    headerButton.addEventListener('click', () => {

        renderPage();
        menuPage();
    })
})();

const changeContect = (() => {
    const headerButton = document.getElementById('header-contacts');

    headerButton.addEventListener('click', () => {

        renderPage();
        contactPage();
    })
})();

