import { createDiv, createImage, createParagraph, createTitle } from "./elements";

export function createHome() {
    const content = document.getElementById('content');

    const homeContainer = createDiv('home-container');
    homeContainer.classList.add('home-container');

    const titleParagraphContainer = createDiv('t-p-container');
    titleParagraphContainer.classList.add('t-p-container');

    const title = createTitle(1, 'home-title', 'Welcome to Kiku el restorano')
    title.classList.add('home-title');

    const paragraph = createParagraph('home-para-1', 'Kiki & Gigi')
    paragraph.classList.add('home-paragraph-1');

    const paragraph2 = createParagraph('home-para-2', 'We love, we live, we cake.')
    paragraph2.classList.add('home-paragraph-2');

    const homeImage = createImage('home-image', './img/home.png');
    homeImage.classList.add('home-image');

    content.appendChild(homeContainer);
    homeContainer.appendChild(titleParagraphContainer);
    titleParagraphContainer.appendChild(paragraph);
    titleParagraphContainer.appendChild(title);
    titleParagraphContainer.appendChild(paragraph2);
    homeContainer.appendChild(homeImage);
}