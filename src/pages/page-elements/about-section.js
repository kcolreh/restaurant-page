import { createDiv, createImage, createTitle, createParagraph } from "./elements";

export function createAboutSection() {
    const content = document.getElementById('content');

    const aboutContainer = createDiv('about-container');
    aboutContainer.classList.add('about-container');

    const titleParagraphContainer = createDiv('about-t-p-container');
    titleParagraphContainer.classList.add('about-t-p-container');

    const aboutImage = createImage('about-image', 'img/home.png');
    aboutImage.classList.add('about-image');

    const aboutTitle = createTitle(1, 'about-title', 'Serving every day since 2022');
    aboutTitle.classList.add('about-title');

    const aboutParagraph = createParagraph('about-paragraph', 'Kiku el restorano opened on Christmas Day 2022. Chefs / Owners Kiki & Gigi began baking pies and selling them to restaurants and his neighbors out of a small kitchen at the corner of Hoogstraat in Rotterdam. Today, the cities beloved restaurant and pie shop celebrates second year of classic, made from scratch european cooking.');
    aboutParagraph.classList.add('about-paragraph');

    content.appendChild(aboutContainer);
    aboutContainer.appendChild(aboutImage);
    aboutContainer.appendChild(titleParagraphContainer);
    titleParagraphContainer.appendChild(aboutTitle);
    titleParagraphContainer.appendChild(aboutParagraph);
}