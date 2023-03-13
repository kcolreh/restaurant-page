import { homePage } from './pages/home.js';
import { menuPage } from './pages/menu.js';
import { renderPage } from './functions/render-page.js';
import { firstLoad } from './functions/first-load.js';
import './style.css';

firstLoad();

const homeBtn = document.getElementById('header-home');
const aboutBtn = document.getElementById('header-about');
const menuBtn = document.getElementById('header-menu');
const contentBtn = document.getElementById('header-content');

homeBtn.addEventListener('click', () => {
    console.log('home');
    renderPage();
    homePage();
});

aboutBtn.addEventListener('click', () => {
    console.log('about');
});

menuBtn.addEventListener('click', () => {
    console.log('menu');
    renderPage();
    menuPage();
});

contentBtn.addEventListener('click', () => {
    console.log('content');
});


