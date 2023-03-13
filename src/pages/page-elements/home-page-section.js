import { createDiv, createImage, createTitle } from "../../utilities/elements";

export function createHome() {
    const content = document.getElementById('content');

    const homeContainer = createDiv('home-container');
    homeContainer.classList.add('home-container');

    const titleParagraphContainer = createDiv('t-p-container');

    const title = createTitle(1, 'home-title', 'Welcome to Kiku el restorano')
    title.classList.add('home-title');

    const homeImage = createImage('home-image', '../src/utilities/img/home.jpg');
    homeImage.classList.add('home-image');

    content.appendChild(homeContainer);
    homeContainer.appendChild(titleParagraphContainer);
    titleParagraphContainer.appendChild(title);
    homeContainer.appendChild(homeImage);
}