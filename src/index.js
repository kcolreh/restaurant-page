import { homePage } from './pages/home';
import './style.css';

homePage();

const changeHome = (() => {
    const homeButton = document.getElementById('header-home');

    homeButton.addEventListener('click', () => {
        console.log('home');
    })
})();

const changeAbout = (() => {
    const homeButton = document.getElementById('header-about');

    homeButton.addEventListener('click', () => {
        console.log('about');
    })
})();


const changeMenu = (() => {
    const homeButton = document.getElementById('header-menu');

    homeButton.addEventListener('click', () => {
        console.log('menu');
    })
})();


const changeContent = (() => {
    const homeButton = document.getElementById('header-content');

    homeButton.addEventListener('click', () => {
        console.log('content');
    })
})();


